import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "テーマ株ラボ",
    template: "%s | テーマ株ラボ",
  },
  description:
    "目まぐるしく変わる株式市場の情報を中立・わかりやすくまとめるメディア。日本株・米国株のテーマ・銘柄情報を整理してお届けします。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
