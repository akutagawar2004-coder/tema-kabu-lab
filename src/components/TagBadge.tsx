import Link from "next/link";

export default function TagBadge({ tag }: { tag: string }) {
  return (
    <Link
      href={`/tags/${encodeURIComponent(tag)}`}
      className="text-xs bg-brand-50 text-brand-700 border border-brand-100 px-2 py-0.5 rounded-full hover:bg-brand-100 transition-colors"
    >
      #{tag}
    </Link>
  );
}
