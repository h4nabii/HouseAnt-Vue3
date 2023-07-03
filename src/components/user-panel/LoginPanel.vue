<script>
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
  <div class="login-form">
    <div class="title">Login</div>
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
      <button @click="login">LOGIN</button>
      <button @click="clean_input">REGISTER</button>
    </div>
  </div>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid black;
  border-radius: 20px;
  box-shadow: #aaa 8px 8px 10px -3px;

  padding: 40px 20px;
  box-sizing: border-box;

  background-color: white;
  color: black;
  font-family: Consolas, serif;
}

.login-form .title {
  height: 50px;
  font-size: 24px;
}

.login-form label {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.login-form label > * {
  height: 26px;
  line-height: 26px;
}

.login-form label span {
  display: inline-block;
  width: 90px;
}

.login-form label input {
  font-size: 16px;
  font-family: inherit;
}

.button-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.login-form .msg {
  height: 20px;
}

.login-form button {
  width: 48%;
  height: 30px;
  font-family: inherit;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
}

.login-form button:hover {
  background-color: #eee;
  transition: background-color 0.5s;
  cursor: pointer;
}
</style>
