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
      let xhr = new XMLHttpRequest();
      let _this = this;

      xhr.open("POST", "http://localhost:8080/user/login");
      xhr.setRequestHeader(
          "Content-Type",
          "application/json;charset=UTF-8"
      );
      xhr.onreadystatechange = function () {
        try {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            let res = xhr.responseText;
            if (xhr.status === 200) {

              if (res === "Login success") {
                _this.msg = res + ", page will redirect in 1 second.";
                setInterval(() => {
                  window.location.href = "/";
                }, 1000);

              } else if (res === "User not found") {
                _this.msg = res;

              } else if (res === "Wrong password") {
                _this.msg = res;

              }
            } else {
              alert("Request occurred an error.");
            }
          }
        } catch (e) {
          alert(`Exception: ${e.description}`);
        }
      };
      xhr.send(JSON.stringify(this.form));
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
  height: 200px;
  width: 400px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: #aaa 8px 8px 10px -3px;
  padding: 20px 20px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  font-family: Consolas, serif;
}

.login-form label {
  display: flex;
  flex-direction: row;
  height: 28px;
  line-height: 28px;
}

.login-form label span {
  display: inline-block;
  width: 90px;
}

.login-form label input {
  flex-grow: 1;
  font-family: inherit;
  border: none;
  border-bottom: 1px solid black;
}

.login-form label input:focus {
  outline: none;
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
