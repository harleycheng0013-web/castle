import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['zh', 'en']),
    slug: z.string(),
    translationId: z.string().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog };
