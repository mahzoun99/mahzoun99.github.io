import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
	schema: z.object({ title: z.string(), description: z.string(), year: z.number(), tags: z.array(z.string()), url: z.string().url().optional(), featured: z.boolean().default(false) }),
});
const posts = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
	schema: z.object({ title: z.string(), description: z.string(), pubDate: z.coerce.date(), tags: z.array(z.string()).default([]), draft: z.boolean().default(false) }),
});
export const collections = { projects, posts };
