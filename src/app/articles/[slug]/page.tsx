import { getAllArticleMetas, getArticleBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TagBadge from "@/components/TagBadge";
import TypeBadge from "@/components/TypeBadge";
import Link from "next/link";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const articles = getAllArticleMetas();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const d = new Date(article.date);
  const dateStr = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;

  return (
    <div className="max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-brand-600 hover:underline mb-6 inline-block">
        ← 記事一覧に戻る
      </Link>

      <article>
        <div className="flex items-center gap-2 mb-3">
          <TypeBadge type={article.type} />
          <time className="text-sm text-gray-400">{dateStr}</time>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">{article.title}</h1>

        {article.tickers && article.tickers.length > 0 && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {article.tickers.map((ticker) => (
              <span
                key={ticker}
                className="text-sm bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded font-mono"
              >
                {ticker}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-6">
          {article.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        <div
          className="article-body bg-white rounded-xl border border-gray-200 p-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400">
        <p>
          本記事は情報整理を目的としたものであり、投資の勧誘を目的としたものではありません。
          投資判断はご自身の責任でお願いします。
        </p>
      </div>
    </div>
  );
}
