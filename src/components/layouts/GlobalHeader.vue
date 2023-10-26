<script>
import routes from "@/routes";
import logoImg from "@/assets/logo.png";
import defaultAvatar from "@/assets/no-pic.jpg";
import {useUserStore} from "@/stores/user";

export default {
  name: "GlobalHeader",
  data: () => ({
    activeIndex: "",
    logoImg,
    access: ["notLogged"],
    userInfo: {
      username: "点击登录",
      avatar: defaultAvatar,
    },
  }),
  created() {
    const userInfo = useUserStore();
    userInfo.$subscribe((mutation, state) => {
      this.userInfo.username = state.username;
      this.userInfo.avatar = state.avatar;
      this.access = state.access;
    });

    // this.getInfo();

    this.activeIndex = this.$route["path"];
  },
  watch: {
    "$route.path"() {
      this.activeIndex = this.$route["path"];
    },
  },
  computed: {
    availableRoutes() {
      let routeTemps = [...routes].filter(item => !item.meta?.hide);
      if (this.access === "user") {
        return routeTemps;
      } else {
        return routeTemps.filter(item => item.access !== "user");
      }
    },
  },
  methods: {
    async login() {
      this.$router.push("/login");
    },
    async getInfo() {

    },
  },
};
</script>

<template>
  <el-menu
    class="menu"
    mode="horizontal"
    :default-active="activeIndex"
    :router="true"
    :unique-opened="true"
    :ellipsis="false"
    background-color="#1f2233"
    text-color="#6cf"
    active-text-color="#77f"
  >
    <div class="logo">
      <img class="logo-image" :src="logoImg" alt="logo"/>
    </div>
    <el-divider class="divider" direction="vertical"/>
    <el-menu-item
      class="menu-item"
      v-for="item in availableRoutes"
      :index="item.path"
      :key="item.path">
      {{ item.name }}
    </el-menu-item>
    <div style="flex-grow: 1"/>

    <div class="user-info" @click="login">
      <div class="username">{{ userInfo.username }}</div>
      <el-avatar class="avatar" shape="square" :src="userInfo.avatar"/>
    </div>
  </el-menu>
</template>

<style scoped>
.menu {
  flex-grow: 1;
}

.menu .logo {
  height: 40px;
  margin: auto 10px;
}

.menu .logo-image {
  height: inherit;
}

.menu .divider {
  height: 20px;
  margin: auto 10px;
}

.menu .menu-item {
  font-family: "simsumg", serif;
  width: 80px;
}

.menu .menu-item.is-active {
  font-weight: bold;
}

.menu .user-info {
  display: flex;
  align-items: center;
  padding-right: 20px;
}

.menu .user-info .username {
  color: white;
  font-size: 14px;
  margin-right: 20px;
}

.menu .user-info:hover {
  cursor: pointer;
}
</style>
