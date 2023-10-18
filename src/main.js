import "@/assets/normalize.css";

import {createApp} from "vue";
import ElementPlus from "element-plus";
import {createRouter, createWebHashHistory} from "vue-router";
import "element-plus/dist/index.css";
import App from "./App.vue";

import routes from "@/routes";


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
