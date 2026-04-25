import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import path from 'path'
import autoprefixer from 'autoprefixer'

// /** @type {import('vite').UserConfig} */

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    plugins: [react(), eslint()],
    server: {
      port: env.VITE_PORT
    },
    resolve: {
      alias: {
        helpers: path.resolve(__dirname, 'src/helpers'),
        images: path.resolve(__dirname, 'src/images'),
        layouts: path.resolve(__dirname, 'src/layouts'),
        components: path.resolve(__dirname, 'src/components'),
        api: path.resolve(__dirname, 'src/api'),
        data: path.resolve(__dirname, 'src/data'),
        state: path.resolve(__dirname, 'src/state')
      }
    },
    base: '/',
    build: { outDir: 'build' },
    css: { postcss: { plugins: [autoprefixer()] } }
  }
})