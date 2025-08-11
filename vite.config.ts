import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@contexts': path.resolve(__dirname, 'src/contexts/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@providers': path.resolve(__dirname, 'src/providers/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    }
  }
})
