<script>
import "@/assets/panel.css";
import config from "@/assets/houseantConfig.js";
import axios from "axios";

export default {
  emits: ["login"],
  data() {
    return {
      form: {
        account: "",
        password: ""
      },
      keep: false,
      msg: ""
    };
  },
  methods: {
    passLogin(user, pass) {
      let data;
      if (user && pass) {
        data = {
          account: user,
          password: pass
        };
        this.keep = true;
      } else {
        data = JSON.stringify(this.form);
      }

      axios(config.axiosConfig(
          "post",
          config.localURL + "/user/login",
          data,
          this.keep
      ))
          .then(resp => {
            let data = resp.data;
            console.log(data);
            if (data.login) {
              this.$emit("login");
            } else {
              this.msg = data.message;
            }
          })
          .catch(e => alert(`Exception: ${e}`));
    },

    // autoLogin() {
    //   axios({
    //     method: "get",
    //     url: "http://localhost:8080/user/autologin",
    //     headers: {
    //       "Content-Type": "application/json;charset=UTF-8"
    //     },
    //     withCredentials: true
    //   })
    //       .then(resp => {
    //         let data = resp.data;
    //         console.log(data);
    //       })
    //       .catch(e => alert(`Exception: ${e}`));
    // },

    register() {
      if (this.form.account === "" || this.form.password === "") {
        this.msg = "Empty";
      } else {
        axios({
          method: "post",
          url: "http://localhost:8080/user/register",
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          },
          withCredentials: true,
          data: JSON.stringify(this.form)
        })
            .then(resp => {
              let data = resp.data;
              console.log(data);
              this.msg = data.message;
              if (data.success) {
                this.passLogin(this.form.account, this.form.password);
              }
            })
            .catch(e => alert(`Exception: ${e}`));
      }
    },

    clean_input() {
      this.form.account = "";
      this.form.password = "";
    },

    clean_msg() {
      this.msg = "";
    }
  },
  mounted() {
    // this.autoLogin();
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
      <button class="panel-button" @click.prevent="passLogin" type="submit">登录</button>
    </form>
  </div>
</template>

<style scoped>
i {
  font-size: 14px;
  font-style: italic;
  color: gray;
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
