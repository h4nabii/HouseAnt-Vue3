<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {

    }
  }
};
</script>

<template>
  <div class="info-panel border-panel">
    <img class="avatar" src="@/assets/no-pic.jpg" alt="avatar">
    <div class="base-info">
      <div class="username">Username</div>
      <div class="tel">TEL</div>
    </div>
    <div class="button-bar">
      <button class="panel-button">我的预约</button>
      <button class="panel-button">我的房源</button>
    </div>
  </div>
</template>

<style scoped>

.info-panel {
  display: flex;
  flex-direction: row;
  height: 120px;
}

.avatar {
  display: block;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 2px solid gray;
  margin-right: 20px;
}

.base-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 300px;
  flex-grow: 1;
  margin-right: 20px;
}

.base-info .username {
  font-size: 20px;
}

.button-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

button {
  width: 200px;
}
</style>
