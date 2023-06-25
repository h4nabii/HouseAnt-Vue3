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
    postFormData() {
      let data = [];
      for (let key in this.form) {
        data.push(`${key}=${this.form[key]}`);
      }
      console.log(data.join("&"));

      let xhr = new XMLHttpRequest();

      xhr.open("POST", "http://localhost:8080/users");
      xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
      );
      xhr.onreadystatechange = function () {
        try {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              console.log(JSON.parse(xhr.responseText));
            } else {
              alert("request occurred an error.");
            }
          }
        } catch (e) {
          alert(`Exception: ${e.description}`);
        }
      };
      xhr.send(/*data.join("&")*/);
    }
  }
};

</script>
<template>
  <div>{{ form }}</div>
  <div class="form">
    <label>
      <span>ID:</span>
      <input v-model="form.user_id" type="number">
    </label>
    <label>
      <span>Account:</span>
      <input v-model="form.account" type="text">
    </label>
    <label>
      <span>Username:</span>
      <input v-model="form.username" type="text">
    </label>
    <label>
      <span>Password:</span>
      <input v-model="form.password" type="password">
    </label>
    <label>
      <span>TEL:</span>
      <input v-model="form.tel" type="tel">
    </label>
    <label>
      <span>Status:</span>
      <input v-model="form.status" type="text">
    </label>
    <label>
      <span>Avatar:</span>
      <input v-model="form.avatar" type="text">
    </label>
    <button @click="">ADD</button>
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
