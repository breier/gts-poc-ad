import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssNesting from "postcss-nesting"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue() ],
  css: {
    postcss: {
      plugins: [ postCssNesting ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // root: 'src',
  build: {
    // outDir: '../dist',
    // emptyOutDir: true,
    // assetsInlineLimit: 64192, // please refer to README notes section
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[ext]/[name][extname]',
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
      },
    },
  }
})
