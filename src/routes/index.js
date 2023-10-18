import AboutPage from "@/components/AboutPage.vue";
import HomePage from "@/components/HomePage.vue";
import ReservationPage from "@/components/ReservationPage.vue";
import ManagePage from "@/components/ManagePage.vue";
import PublishPage from "@/components/PublishPage.vue";

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
];
