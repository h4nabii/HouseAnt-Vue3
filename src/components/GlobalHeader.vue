<script>
import routes from "@/routes";
import logoImg from "@/assets/logo.png";
import defaultAvatar from "@/assets/no-pic.jpg";
import houseAnt from "@/assets/houseAnt";

export default {
  name: "GlobalHeader",
  data: () => ({
    activeIndex: location.hash.substring(1),
    logoImg,
    access: ["notLogged"],
    userInfo: {
      username: "未登录",
      avatar: defaultAvatar,
    },
  }),
  created() {
    this.login();
  },
  computed: {
    availableRoutes() {
      if (this.access === "user") {
        return routes;
      } else {
        return routes.filter(item => item.access !== "user");
      }
    },
  },
  methods: {
    async login() {
      const {success, account} = await houseAnt.user.login("456", "456");
      await this.getInfo();
      if (success) {
        this.access = "user";
      }
    },
    async getInfo() {
      const {user, message, error} = await houseAnt.user.getInfo();
      if (!error) {
        this.userInfo.username = user.username;
        this.access = user.tel;
      }
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
        :index="item.path">
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
