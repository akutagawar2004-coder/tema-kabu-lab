import { getAllTags, getArticlesByTag } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { tag: string } };

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = decodeURIComponent(params.tag);
  return { title: `#${tag} の記事` };
}

export default function TagPage({ params }: Props) {
  const tag = decodeURIComponent(params.tag);
  const articles = getArticlesByTag(tag);

  if (articles.length === 0) notFound();

  return (
    <div>
      <Link href="/tags" className="text-sm text-brand-600 hover:underline mb-6 inline-block">
        ← タグ一覧に戻る
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        <span className="text-brand-600">#{tag}</span> の記事
      </h1>
      <p className="text-sm text-gray-400 mb-6">{articles.length}件</p>

      <div className="grid gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
