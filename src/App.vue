<script>
import UserPanel from "@/components/UserPanel.vue";
import BrowsePanel from "@/components/BrowsePanel.vue";

export default {
  components: {
    UserPanel,
    BrowsePanel
  },
  data() {
    return {
      login: false
    };
  }

};
</script>

<template>
  <div class="container">
    <header>HouseAnt</header>
    <div class="content">
      <UserPanel @login="login=true" @logout="login=false"/>
      <BrowsePanel/>
    </div>
    <a :hidden="!login" href="/database/">
      <button class="router border-panel">数据管理</button>
    </a>
    <footer>HouseAnt</footer>
  </div>
</template>

<style scoped>
.content {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
}

.content > * {
  margin-bottom: 30px;
}
</style>
