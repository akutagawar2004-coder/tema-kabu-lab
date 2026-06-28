import Link from "next/link";
import type { ArticleMeta } from "@/types/article";
import TagBadge from "./TagBadge";
import TypeBadge from "./TypeBadge";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <TypeBadge type={article.type} />
        <time className="text-xs text-gray-400">{formatDate(article.date)}</time>
      </div>
      <Link href={`/articles/${article.slug}`}>
        <h2 className="text-base font-bold text-gray-900 hover:text-brand-600 transition-colors leading-snug mb-2">
          {article.title}
        </h2>
      </Link>
      {article.tickers && article.tickers.length > 0 && (
        <div className="flex gap-1.5 mb-2 flex-wrap">
          {article.tickers.map((ticker) => (
            <span
              key={ticker}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-mono"
            >
              {ticker}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm text-gray-500 line-clamp-2 mb-3">{article.excerpt}</p>
      <div className="flex flex-wrap gap-1.5">
        {article.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>
    </article>
  );
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}
