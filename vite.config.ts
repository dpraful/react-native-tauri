import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      include: /\.(jsx|js|tsx|ts)$/, // Use regex to include .js files
    }),
  ],
  root: path.resolve(__dirname),
  server: {
    port: 3000,
    host: 'localhost',
  },
  resolve: {
    alias: [
      { find: /^react-native$/, replacement: 'react-native-web' },
      { find: /^react-native\/(.*)/, replacement: 'react-native-web/dist/index.js' },
      { find: 'react-native-web', replacement: path.resolve(__dirname, '../react-native-web/dist/index.js') },
      { find: 'react-native-fs', replacement: path.resolve(__dirname, './src/empty.js') },
      { find: 'react-native-blob-util', replacement: path.resolve(__dirname, './src/empty.js') },
      { find: 'react-native-vector-icons', replacement: path.resolve(__dirname, '../react-native-vector-icons/dist/index.es.js') },
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  build: {
    outDir: path.resolve(__dirname, '..', '..', 'build'),
    target: 'es2020',
  },
  esbuild: {
    loader: 'tsx',
    include: /\.(jsx|js|tsx|ts)$/,
    exclude: [],
  },
  optimizeDeps: {
    include: ['react-native', 'react-native-web'],
    exclude: [],
    esbuildOptions: {
      loader: {
        '.js': 'tsx',
        '.mjs': 'tsx',
      },
    },
  },
})
