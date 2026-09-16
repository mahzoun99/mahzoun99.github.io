// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mahzoun99.github.io',
  base: process.env.BASE_PATH ?? '/',
  vite: {
    plugins: [tailwindcss()]
  }
});