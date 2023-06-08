import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

const cartItemCount = ref(0);
app.config.globalProperties.$cartCount = cartItemCount;
// const cartItemCount = ref(null);
// app.provide('$cartCount', cartItemCount);

// 引入CSS樣式
// import './assets/main.css';
import 'virtual:svg-icons-register';
import '@/assets/css/reset.css';

// 引入Element Plus圖示
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 使用Vue路由
app.use(router);

// 掛載Vue應用程式
app.mount('#app');
