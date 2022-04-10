/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
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
    // global: true
    // globalSetup: async function () {
    //   const server = await startServer()
    //   return async () => {
    //     await server.close()
    //   }
    // }
  }
})
