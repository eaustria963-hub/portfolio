// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      name: 'Syne',
      cssVariable: '--font-syne',
      provider: fontProviders.google(),
      weights: [400, 600, 700, 800],
      styles: ['normal'],
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ['normal'],
      display: 'swap',
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
