import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-brand-700">テーマ株ラボ</span>
          <span className="hidden sm:inline text-xs text-gray-400 font-normal mt-1">
            株式市場の今を知る
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-gray-600 hover:text-brand-600 transition-colors">
            記事一覧
          </Link>
          <Link href="/tags" className="text-gray-600 hover:text-brand-600 transition-colors">
            タグ一覧
          </Link>
        </nav>
      </div>
    </header>
  );
}
