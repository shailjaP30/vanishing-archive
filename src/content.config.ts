import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    number: z.string(),
    genre: z.string(),
    status: z.enum(['UNSOLVED', 'SOLVED']),
    difficulty: z.number().min(1).max(5),
    price: z.string(),
    blurb: z.string(),
    evidence: z.array(z.string()),
    theme: z.object({
      accent: z.string(),
      accentDim: z.string(),
      bg: z.string(),
      panel: z.string(),
      fontDisplay: z.string(),
      fontBody: z.string(),
    }),
  }),
});

export const collections = { cases };