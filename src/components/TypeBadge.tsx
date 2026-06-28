import type { ArticleType } from "@/types/article";

const TYPE_LABELS: Record<ArticleType, string> = {
  single: "単銘柄",
  multi: "マルチ銘柄",
  macro: "マクロ・戦略",
};

const TYPE_COLORS: Record<ArticleType, string> = {
  single: "bg-blue-50 text-blue-700 border-blue-100",
  multi: "bg-purple-50 text-purple-700 border-purple-100",
  macro: "bg-amber-50 text-amber-700 border-amber-100",
};

export default function TypeBadge({ type }: { type: ArticleType }) {
  return (
    <span
      className={`text-xs border px-2 py-0.5 rounded font-medium ${TYPE_COLORS[type]}`}
    >
      {TYPE_LABELS[type]}
    </span>
  );
}
