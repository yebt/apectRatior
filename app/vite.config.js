import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
      { find: '@styles', replacement: resolve(__dirname, './src/styles') },
      { find: '@components', replacement: resolve(__dirname, './src/components') },
      { find: '@modules', replacement: resolve(__dirname, './src/modules') },
      { find: '@utils', replacement: resolve(__dirname, './src/utils') }
    ]
  }
})
