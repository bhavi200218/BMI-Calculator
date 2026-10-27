import type { Locale } from '../calculators';

// Helper type for article structure
export interface BlogArticleData {
  datePublished: string;
  dateModified: string;
  title: Record<Locale, string>;
  category: Record<Locale, string>;
  description: Record<Locale, string>;
  contentHtml: Record<Locale, string>;
  body?: Partial<Record<Locale, string[]>> | Record<string, string[]>;
}
