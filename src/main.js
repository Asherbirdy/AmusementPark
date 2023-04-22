import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "virtual:svg-icons-register";
import "@/assets/css/reset.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
