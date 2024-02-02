import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@vitejs/plugin-vue', '@vitejs/plugin-react'],
  },
  clearScreen: true,
  watch: true
})
