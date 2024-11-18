import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig({
  base: '/migraciones-clone/',
  plugins: [],
  resolve: {
    alias: [],
  },
});
