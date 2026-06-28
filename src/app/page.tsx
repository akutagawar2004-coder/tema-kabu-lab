import { getAllArticleMetas, getAllTags } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export default function HomePage() {
  const articles = getAllArticleMetas();
  const tags = getAllTags();

  return (
    <div>
      <section className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">最新記事</h1>
        <p className="text-sm text-gray-500">
          日本株・米国株のテーマ・銘柄情報を中立にまとめてお届けします
        </p>
      </section>

      {tags.length > 0 && (
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
                className="text-sm bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full hover:border-brand-400 hover:text-brand-700 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </section>
      )}

      {articles.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">まだ記事がありません</p>
          <p className="text-sm mt-2">content/articles/ にMarkdownファイルを追加してください</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
