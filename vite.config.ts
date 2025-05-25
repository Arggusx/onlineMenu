import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // permite acesso via IP local
  },
  build: {
    outDir: 'dist'
  },
  // Adiciona fallback para SPA (Single Page Application)
  preview: {
    host: true,
    port: 5174,
    open: false,
  }
})
