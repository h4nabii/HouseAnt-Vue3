<script>
import PageLayout from "@/components/layouts/PageLayout.vue";
import houseAnt from "@/assets/houseAnt";

import {useUserStore} from "@/stores/user";

export default {
  name: "LoginPage",
  components: {PageLayout},
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    async login() {
      const userInfo = useUserStore();
      console.log(this.username);
      console.log(this.password);

      const resp = await houseAnt.user.login(this.username, this.password);
      if (resp.success) {
        const {user, error, message} = await houseAnt.user.getInfo();
        if (error) {
          console.error(message);
          return;
        }
        userInfo.username = user.username;
        userInfo.access = user.access;
      } else {
        console.log(resp.error, resp.message);
      }
    },
  },
};
</script>

<template>
  <PageLayout title="登录">
    <el-form class="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" show-password/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </PageLayout>
</template>

<style scoped>
.form {
  width: 800px;
  margin: 0 auto;
}
</style>
