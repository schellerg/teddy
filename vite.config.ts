/// <reference types="vitest/config" />
/// <reference types="@testing-library/jest-dom" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import tailwindcss from '@tailwindcss/vite'

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
      '@mocks': path.resolve(__dirname, 'src/mocks/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@providers': path.resolve(__dirname, 'src/providers/'),
      '@test': path.resolve(__dirname, 'src/test/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  test: {
    environment: 'jsdom',
    setupFiles: 'src/test/setup.ts',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        'node_modules/',
        'src/api',
        'src/mocks/',
        'src/pages',
        'src/test/',
        '*.config.js',
        '*.config.ts',
        '**/*.d.ts',
        'src/App.tsx',
        'src/main.tsx',
        'src/vite-env.d.ts',
      ],
    },
  }
})
