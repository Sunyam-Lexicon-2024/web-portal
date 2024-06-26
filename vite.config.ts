import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/web-portal/",
  build: {
    outDir: "./dist"
  },
  server: {
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  plugins: [react()],
})
