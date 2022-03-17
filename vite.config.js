import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import loaderCodePlugin from './config_plugins/loaderCodePlugin'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()]
})
