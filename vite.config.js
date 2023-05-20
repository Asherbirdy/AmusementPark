import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import path from 'path';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/AmusementPark/',
  plugins: [
    vue(),
    AutoImport({
      // 這個 import 陣列非常重要，他就是告訴我們的 vite ，哪些哪些 API 要自動引入
      imports: ['vue', 'vue-router', 'vue-i18n'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.js',
    }),
    Components({
      // 從 `./src/components/` 路徑查找
      resolvers: [ElementPlusResolver()],
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/auto-components.js',
      deep: true, //搜尋子目錄
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      symbolId: '[dir]/[name]',
    }),
    Pages(
      { pagesDir: [{ dir: 'src/pages', baseRoute: '' }] },
      { dir: 'src/admin/pages', baseRoute: 'admin' }
    ),
    Layouts(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: '5173',
    proxy: {
      '/api': {
        target: 'http://localhost:80/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''), // 不可以省略rewrite
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/global.scss";`,
      },
    },
  },
});
