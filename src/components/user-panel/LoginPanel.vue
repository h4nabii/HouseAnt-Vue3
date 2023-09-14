<script>
import "@/assets/panel.css";
import houseAnt from "@/assets/houseAnt";
import validateLogin from "@/assets/validators/userPassValidator";
import newAxios from "@/assets/axois/axoisGen";

export default {
  emits: ["login"],
  data() {
    return {
      form: {
        account: "",
        password: ""
      }
    };
  },
  created() {
    houseAnt.user.autoLogin().then(({success}) => {
      if (success) this.$emit("login");
    });
  },
  methods: {
    login() {
      if (!validateLogin(this.form.account, this.form.password)) {
        console.log(">> invalid parameter");
        return;
      }

      houseAnt.user.login(this.form.account, this.form.password).then(
          result => {
            if (result.success) {
              console.log(">> login successfully");
              this.$emit("login");

            } else if (result.newUser) {
              console.log(">> failed: account not found, now trying to register a new account");
              this.register(this.form.account, this.form.password);

            } else if (result.error) {
              console.log(">> error: " + result.message);

            } else {
              console.log(">> error: unknown reason");
            }
          }
      );
    },

    register(user, pass) {
      houseAnt.user.register(user, pass).then(
          result => {
            this.msg = result.message;
            if (result.success) {
              console.log(">> Register successfully, now trying to login");
              this.login(this.form.account, this.form.password);
            }
          }
      );
    },

    clean_input() {
      this.form.account = "";
      this.form.password = "";
    },

    clean_msg() {
      this.msg = "";
    }
  }
};
</script>

<template>
  <div class="login-panel border-panel">
    <div class="title">登录 / 注册 <i>新账号将会自动注册</i></div>
    <form>
      <label>
        <span>账号：</span>
        <input class="panel-input" v-model="form.account" type="text" @input="clean_msg">
      </label>
      <label>
        <span>密码：</span>
        <input class="panel-input" v-model="form.password" type="password" @input="clean_msg">
      </label>
      <button class="panel-button" @click.prevent="login" type="submit">登录</button>
    </form>
  </div>
</template>

<style scoped>
.login-panel {
  height: 120px;
}

i {
  font-size: 14px;
  font-style: italic;
  color: grey;
}

form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

input {
  width: 300px;
}

button {
  width: 200px;
}

</style>
