import "@/assets/normalize.css";

import {createApp} from "vue";
import {createPinia} from "pinia";
import {createRouter, createWebHashHistory} from "vue-router";
import "element-plus/dist/index.css";
import App from "./App.vue";

import routes from "@/routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .mount("#app");
