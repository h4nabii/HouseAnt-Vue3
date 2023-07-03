<script>
import "@/assets/panel.css"
export default {
  data() {
    return {
      form: {
        account: "",
        password: ""
      },
      msg: ""
    };
  },
  methods: {
    login() {
      console.log("login");
      this.$emit("loggedIn");
    },
    clean_input() {
      this.form.account = "";
      this.form.password = "";
    },
    clean_msg() {
      this.msg = "";
    }
  },
  emits: ["loggedIn"]
};
</script>

<template>
  <div class="login-panel panel">
    <div class="title">Login / Register</div>
    <label>
      <span>Account:</span>
      <input v-model="form.account" type="text" @change="clean_msg">
    </label>
    <label>
      <span>Password:</span>
      <input v-model="form.password" type="password" @change="clean_msg">
    </label>
    <div class="msg" @click="msg = 'clicked'">{{ msg }}</div>
    <div class="button-bar">
      <button @click="login">Login</button>
      <button @click="clean_input">Register</button>
    </div>
  </div>
</template>

<style scoped>
.login-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.login-panel label {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.login-panel label > * {
  height: 26px;
  line-height: 26px;
}

.login-panel label span {
  display: inline-block;
  width: 90px;
}

.login-panel label input {
  font-size: 16px;
  font-family: inherit;
  padding: 0 10px;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: gray 1px 1px;
}

.login-panel label input:focus {
  outline: none;
  box-shadow: inset gray 1px 1px;
}

.button-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.login-panel .msg {
  height: 20px;
}

.login-panel button {
  width: 45%;
  height: 30px;
  font-family: inherit;
  background-color: white;
  border: 1px solid gray;
  border-radius: 20px;
  box-shadow: gray 1px 1px;
}

.login-panel button:hover {
  background-color: #eee;
  cursor: pointer;
}

.login-panel button:active {
  transform: translate(1px, 1px);
  box-shadow: inset gray 1px 1px;
}

</style>
