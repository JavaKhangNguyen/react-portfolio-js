import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // Specify jsdom as the test environment
    setupFiles: './src/test/setup.js',
    css: true
  },
});
