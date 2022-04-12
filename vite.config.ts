/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      ...configDefaults.exclude,
      'cypress/*',
      'tests/e2e/*',
      'src/types/*'
    ]
  }
})
