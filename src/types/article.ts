export type ArticleType = "single" | "multi" | "macro";

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  type: ArticleType;
  tags: string[];
  excerpt: string;
  tickers?: string[];
}

export interface Article extends ArticleMeta {
  content: string;
}
