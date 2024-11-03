import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
          quietDeps: true,
          implementation: sass,
        },
      },
    },
  }
})