<script>
import LoginPanel from "@/components/user-panel/LoginPanel.vue";
import InfoPanel from "@/components/user-panel/InfoPanel.vue";

export default {
  emits: ["login", "logout"],
  data() {
    return {
      login: false,
    };
  },
  components: {
    LoginPanel,
    InfoPanel,
  },
};
</script>

<template>
  <div class="user-panel">
    <LoginPanel v-if="!login" @login="login=true; this.$emit('login');"/>
    <InfoPanel v-if="login" @logout="login=false; this.$emit('logout');"/>
  </div>
</template>

<style scoped>
</style>
