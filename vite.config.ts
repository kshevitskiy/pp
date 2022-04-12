/// <reference types="vitest" />

import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { configDefaults } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    },
    plugins: [vue()],
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'cypress/*', 'tests/e2e/*']
    }
  })
}
