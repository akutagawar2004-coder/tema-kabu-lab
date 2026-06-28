import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import type { Article, ArticleMeta } from "@/types/article";

const articlesDirectory = path.join(process.cwd(), "content/articles");

export function getAllArticleMetas(): ArticleMeta[] {
  if (!fs.existsSync(articlesDirectory)) return [];

  const fileNames = fs.readdirSync(articlesDirectory).filter((f) => f.endsWith(".md"));

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      type: data.type as ArticleMeta["type"],
      tags: (data.tags as string[]) ?? [],
      excerpt: data.excerpt as string,
      tickers: (data.tickers as string[]) ?? [],
    } satisfies ArticleMeta;
  });

  return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    type: data.type as ArticleMeta["type"],
    tags: (data.tags as string[]) ?? [],
    excerpt: data.excerpt as string,
    tickers: (data.tickers as string[]) ?? [],
    content: contentHtml,
  };
}

export function getAllTags(): string[] {
  const metas = getAllArticleMetas();
  const tagSet = new Set<string>();
  metas.forEach((m) => m.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getArticlesByTag(tag: string): ArticleMeta[] {
  return getAllArticleMetas().filter((m) => m.tags.includes(tag));
}
