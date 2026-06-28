export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
        <p>
          当サイトの情報は投資判断の参考として提供しており、投資の勧誘を目的としたものではありません。
          投資は自己責任でお願いします。
        </p>
        <p className="mt-2">© {new Date().getFullYear()} テーマ株ラボ</p>
      </div>
    </footer>
  );
}
