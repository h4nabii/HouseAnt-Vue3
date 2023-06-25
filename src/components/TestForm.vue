<script>

export default {
  data() {
    return {
      form: {
        user_id: 0,
        account: "",
        username: "",
        password: "",
        tel: "",
        status: "",
        avatar: ""
      }
    };
  },
  methods: {
    postData() {
      let data = [];
      for (let key in this.form) {
        data.push(`${key}=${this.form[key]}`);
      }
      console.log(data.join("&"));

      let xhr = new XMLHttpRequest();

      xhr.open("POST", "http://localhost:8080");
      xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
      );
      xhr.onreadystatechange = function () {
        try {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {

            } else {
              alert("request occurred an error.");
            }
          }
        } catch (e) {
          alert(`Exception: ${e.description}`);
        }
      };
      xhr.send(data.join("&"));
    }
  }
};

</script>
<template>
  <div>{{ form }}</div>
  <div class="form">
    <label>
      <span>ID:</span>
      <input type="number" v-model="form.user_id">
    </label>
    <label>
      <span>Account:</span>
      <input type="text" v-model="form.account">
    </label>
    <label>
      <span>Username:</span>
      <input type="text" v-model="form.username">
    </label>
    <label>
      <span>Password:</span>
      <input type="password" v-model="form.password">
    </label>
    <label>
      <span>TEL:</span>
      <input type="tel" v-model="form.tel">
    </label>
    <label>
      <span>Status:</span>
      <input type="text" v-model="form.status">
    </label>
    <label>
      <span>Avatar:</span>
      <input type="text" v-model="form.avatar">
    </label>
    <button @click="postData">ADD</button>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 30px;
}

.form label {
  margin-bottom: 10px;
  display: flex;
}

.form span {
  display: inline-block;
  width: 80px;
}

.form input {
  flex-grow: 1;
}

</style>
