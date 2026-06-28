import { getAllTags, getArticlesByTag } from "@/lib/articles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "タグ一覧" };

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">タグ一覧</h1>

      {tags.length === 0 ? (
        <p className="text-gray-400">タグがありません</p>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {tags.map((tag) => {
            const count = getArticlesByTag(tag).length;
            return (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag)}`}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between hover:border-brand-400 hover:shadow-sm transition-all"
              >
                <span className="text-brand-700 font-medium">#{tag}</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                  {count}件
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
