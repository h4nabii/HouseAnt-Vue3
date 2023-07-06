<script>
import "@/assets/panel.css";
import validateUpdate from "@/assets/validators/updateFormValidator";
import houseAnt from "@/assets/houseAnt";

export default {
  emits: ["update", "changePass"],
  props: [
    "username",
    "tel"
  ],
  data() {
    return {
      form: {
        avatar: "",
        username: "",
        password: "",
        confirm: "",
        tel: ""
      },
      msg: {
        avatar: "",
        username: "",
        password: "",
        confirm: "",
        tel: ""
      }
    };
  },
  methods: {
    updateInfo() {
      let data = this.form;
      let msg = this.msg;
      console.log(data);
      let result = validateUpdate(data.username, data.password, data.confirm, data.tel);

      if (result.success) {
        houseAnt.user.updateInfo(data.username, data.password, data.tel).then(({success, keep, message}) => {
          if (success) {
            if (!keep) {
              this.$emit("changePass");
            } else {
              this.$emit("update");
            }
            console.log(">> " + message);

          } else {
            console.log(">> failed: " + message);
          }
        });

      } else {
        if (result.emptyUsername) msg.username = "用户名不能为空";
        if (result.confirmFailed) msg.confirm = "两次输入的密码不同";

      }
    },
    reset() {
      this.form.username = this.username;
      this.form.password = "";
      this.form.confirm = "";
      this.form.tel = this.tel;
      this.clearMsg("username");
      this.clearMsg("password");
      this.clearMsg("confirm");
      this.clearMsg("tel");
    },
    clearMsg(msgName) {
      this.msg[msgName] = "";
    }
  },
  created() {
    this.reset();
  }
};

</script>

<template>
  <div class="modify-panel border-panel">
    <div class="title">修改个人信息</div>
    <form>
      <label class="avatar-input">
        <img class="avatar" src="@/assets/no-pic.jpg" alt="avatar">
        <input type="file">
      </label>

      <div class="base-input">
        <div class="input-line">
          <label for="username-input">用户名：</label>
          <input v-model="form.username"
                 @input="clearMsg('username')"
                 id="username-input"
                 class="panel-input"
                 type="text">
          <span id="username-msg">{{ msg.username }}</span>
        </div>
        <div class="input-line">
          <label for="password-input">密码：</label>
          <input v-model="form.password"
                 @input="clearMsg('password')"
                 id="password-input"
                 class="panel-input"
                 type="password">
          <span id="password-msg">{{ msg.password }}</span>
        </div>
        <div class="input-line">
          <label for="confirm-input">确认密码：</label>
          <input v-model="form.confirm"
                 @input="clearMsg('confirm')"
                 id="confirm-input"
                 class="panel-input"
                 type="password">
          <span id="confirm-msg">{{ msg.confirm }}</span>
        </div>
        <div class="input-line">
          <label for="tel-input">电话：</label>
          <input v-model="form.tel"
                 @input="clearMsg('tel')"
                 id="tel-input"
                 class="panel-input"
                 type="tel">
          <span id="tel-msg">{{ msg.tel }}</span>
        </div>
        <div class="button-bar">
          <button @click.prevent="updateInfo" class="panel-button">确认修改</button>
          <button @click.prevent="reset" class="panel-button">重置</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 80px;
  margin-bottom: 30px;
}

.avatar-input {
  width: 120px;
  display: block;
  border: 1px solid gray;
}

.avatar-input .avatar {
  width: 120px;
  height: 120px;
}

.avatar-input input {
  display: none;
}

.base-input {
  display: flex;
  flex-direction: column;
}

.input-line label {
  display: inline-block;
  width: 80px;
  margin-bottom: 20px;
}

.input-line input {
  width: 240px;
}

.input-line span {
  display: inline-block;
  width: 200px;
}

.button-bar {
  margin-left: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 240px;
}

button {
  width: 110px;
}


</style>
