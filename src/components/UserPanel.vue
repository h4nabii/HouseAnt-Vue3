<script>
import LoginPanel from "@/components/user-panel/LoginPanel.vue";
import InfoPanel from "@/components/user-panel/InfoPanel.vue";

export default {
  computed: {
    componentPanel() {
      return this.loggedIn ? InfoPanel : LoginPanel;
    }
  },
  data() {
    return {
      loggedIn: false
    };
  },
  components: {
    LoginPanel,
    InfoPanel
  }
};
</script>

<template>
  <div class="user-panel">
    <component :is="componentPanel"/>
  </div>
</template>

<style scoped>
.user-panel {
  //width: 500px;
}
</style>
