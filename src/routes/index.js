import About from "@/components/About.vue";
import Home from "@/components/Home.vue";
import CustomerPanel from "@/components/user-panel/CustomerPanel.vue";
import OwnerPanel from "@/components/user-panel/OwnerPanel.vue";

export default [
    {
        path: "/",
        component: Home,
        name: "主页",
    },
    {
        path: "/reservation",
        component: CustomerPanel,
        name: "查看预约",
        access: "user",
    },
    {
        path: "/houses-publish",
        component: OwnerPanel,
        name: "发布房屋",
        access: "user",
    },
    {
        path: "/houses-manage",
        component: Home,
        name: "管理房屋",
        access: "user",
    },
    {
        path: "/about",
        component: About,
        name: "关于",
    },
];
