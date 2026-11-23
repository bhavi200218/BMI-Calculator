import type { BlogArticleData } from './articles/types';
import { bmiArticles } from './articles/bmiArticles';
import { asianBmiArticles } from './articles/asianBmiArticles';
import { bodyCompArticles } from './articles/bodyCompArticles';
import { metabolismArticles } from './articles/metabolismArticles';
import { nutritionAndFitnessArticles } from './articles/nutritionAndFitnessArticles';
import { guidelinesAndStrategiesArticles } from './articles/guidelinesAndStrategiesArticles';

export type { BlogArticleData };

export const blogArticles: Record<string, BlogArticleData> = {
  ...bmiArticles,
  ...asianBmiArticles,
  ...bodyCompArticles,
  ...metabolismArticles,
  ...nutritionAndFitnessArticles,
  ...guidelinesAndStrategiesArticles,
};

/**
 * Evaluates whether an article contains substantial, clinically in-depth content
 * in the specified locale (vs. a placeholder summary or thin stub).
 */
export function isSubstantialArticle(slug: string, lang: string): boolean {
  if (lang === 'en') return true;
  const art = blogArticles[slug];
  if (!art || !art.contentHtml || !art.contentHtml[lang]) return false;
  const len = art.contentHtml[lang].trim().length;
  if (lang === 'hi') return len >= 500;
  return len >= 800;
}

