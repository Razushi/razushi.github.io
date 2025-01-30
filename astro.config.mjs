// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [svelte(), mdx()],
  site: 'https://razushi.github.io',
});
