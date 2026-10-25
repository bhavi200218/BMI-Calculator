import type { BlogArticleData } from './articles/types';
import { bmiArticles } from './articles/bmiArticles';
import { asianBmiArticles } from './articles/asianBmiArticles';
import { bodyCompArticles } from './articles/bodyCompArticles';
import { metabolismArticles } from './articles/metabolismArticles';
import { nutritionAndFitnessArticles } from './articles/nutritionAndFitnessArticles';

export type { BlogArticleData };

export const blogArticles: Record<string, BlogArticleData> = {
  ...bmiArticles,
  ...asianBmiArticles,
  ...bodyCompArticles,
  ...metabolismArticles,
  ...nutritionAndFitnessArticles,
};
