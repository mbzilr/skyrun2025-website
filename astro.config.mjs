// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// Tailwind v4 (Frankensteined as of 31/01/2025 as Astro does not include an official Integration yet.)
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
});