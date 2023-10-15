<script>
import BrowsePanel from "@/components/BrowsePanel.vue";
import UserPanel from "@/components/UserPanel.vue";

export default {
  name: "Home",
  components: {UserPanel, BrowsePanel},
};
</script>

<template>
  <div class="container">
    <div class="content">
      <!--<UserPanel @login="login=true" @logout="login=false"/>-->
      <BrowsePanel/>
    </div>
    <!--<a :hidden="!login" href="/database/">-->
    <!--  <button class="router border-panel">数据管理</button>-->
    <!--</a>-->
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}
</style>
