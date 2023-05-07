import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import topLevelAwait from "vite-plugin-top-level-await";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    }),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Login': './src/components/Login'
      },
      shared: ['react', 'react-dom']
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
})
