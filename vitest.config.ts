import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['./tests/**/*.test.ts', './tests/**/*.test.tsx'],
    coverage: {
      reporter: ['json-summary', 'json', 'text'],
    },
  },
  resolve: { alias: { '@core': path.resolve(__dirname, './src/') } },
})
