<script>
import "@/assets/panel.css";

export default {
  data() {
    return {};
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
          <label for="account-input">账号：</label>
          <input id="account-input" class="panel-input" type="text">
          <span id="account-msg"></span>
        </div>
        <div class="input-line">
          <label for="password-input">密码：</label>
          <input id="password-input" class="panel-input" type="password">
          <span id="password-msg"></span>
        </div>
        <div class="input-line">
          <label for="confirm-input">确认密码：</label>
          <input id="confirm-input" class="panel-input" type="password">
          <span id="password-msg"></span>
        </div>
        <div class="input-line">
          <label for="tel-input">电话：</label>
          <input id="tel-input" class="panel-input" type="password">
          <span id="password-msg"></span>
        </div>

        <button @click.prevent class="panel-button">确认修改</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  width: 580px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.avatar-input {
  width: 120px;
  display: block;
  margin: 0 80px 0 30px;
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

button {
  margin-left: 80px;
  width: 240px;
}


</style>
