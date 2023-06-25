<script>

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    getUsers() {
      let usersXHR = new XMLHttpRequest();
      usersXHR.open("GET", "http://localhost:8080/users");
      usersXHR.onreadystatechange = () => {
        try {
          if (usersXHR.readyState === XMLHttpRequest.DONE) {
            if (usersXHR.status === 200) {
              this.users = JSON.parse(usersXHR.responseText);
            } else {
              alert("request occurred an error.");
            }
          }
        } catch (e) {
          alert(`Exception: ${e.description}`);
        }
      };
      usersXHR.send();
    }
  },
  mounted() {
    this.getUsers();
  }
};

</script>

<template>
  <button @click="getUsers">REFRESH</button>
  <table>
    <tr>
      <th class="user_id">ID</th>
      <th class="account">ACCOUNT</th>
      <th class="username">USERNAME</th>
      <th class="password">PASSWORD</th>
      <th class="tel">TEL</th>
      <th class="status">STATUS</th>
      <th class="avatar">AVATAR</th>
    </tr>
    <tr v-for="{
      user_id,
      account,
      username,
      password,
      tel,
      status,
      avatar
    } in users" :key="user_id">
      <td class="user_id">{{ user_id }}</td>
      <td class="account">{{ account }}</td>
      <td class="username">{{ username }}</td>
      <td class="password">{{ password }}</td>
      <td class="tel"> {{ tel }}</td>
      <td :class="status ? 'online':'offline'" class="status">
        {{ status ? "Online" : "Offline" }}
      </td>
      <td class="avatar"> {{ avatar }}</td>
    </tr>
  </table>
</template>

<style scoped>
button {
  margin-bottom: 10px;
}

table {
  min-width: 700px;
  border-collapse: collapse;
}

table tr * {
  border: 1px solid white;
  padding: 0 0 0 8px;
  text-align: left;
}

table tr .user_id {
  width: 40px;
}

table tr .account {
  width: 100px;
}

table tr .username {
  width: 100px;
}

table tr .password {
  width: 100px;
}

table tr .tel {
  width: 120px;
}

table tr .status {
  width: 70px;
  padding: 0;
  text-align: center;
}

table tr .status.online {
  color: lightgreen;
}

table tr .status.offline {
  color: red;
}

table tr .avatar {
}
</style>
