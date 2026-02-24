import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    coverImage: z.string().optional(),
    color: z.enum(['yellow', 'pink', 'blue', 'green']).optional().default('yellow'),
  }),
});

export const collections = { posts };
