<script>
import LoginPanel from "@/components/user-panel/LoginPanel.vue";
import InfoPanel from "@/components/user-panel/InfoPanel.vue";

export default {
  data() {
    return {
      login: false
    };
  },
  methods: {},
  computed: {
    componentPanel() {
      return this.login ? InfoPanel : LoginPanel;
    }
  },
  components: {
    LoginPanel,
    InfoPanel,
  }
};
</script>

<template>
  <div class="user-panel">
    <LoginPanel v-if="!login" @login="login=true"/>
    <InfoPanel v-if="login" @logout="login=false"/>
  </div>
</template>

<style scoped>
</style>
