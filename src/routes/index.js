import AboutPage from "@/components/pages/AboutPage.vue";
import HomePage from "@/components/pages/HomePage.vue";
import ReservationPage from "@/components/pages/ReservationPage.vue";
import ManagePage from "@/components/pages/ManagePage.vue";
import PublishPage from "@/components/pages/PublishPage.vue";
import LoginPage from "@/components/pages/LoginPage.vue";

export default [
  {
    path: "/",
    component: HomePage,
    name: "主页",
  },
  {
    path: "/reservation",
    component: ReservationPage,
    name: "查看预约",
    access: "user",
  },
  {
    path: "/houses-publish",
    component: PublishPage,
    name: "发布房屋",
    access: "user",
  },
  {
    path: "/houses-manage",
    component: ManagePage,
    name: "管理房屋",
    access: "user",
  },
  {
    path: "/about",
    component: AboutPage,
    name: "关于",
  },
  {
    path: "/login",
    component: LoginPage,
    meta: {
      hide: true,
    },
  },
];
