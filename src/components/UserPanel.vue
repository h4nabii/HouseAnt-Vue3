<script>
import LoginPanel from "@/components/user-panel/LoginPanel.vue";
import InfoPanel from "@/components/user-panel/InfoPanel.vue";
import ModifyPanel from "@/components/user-panel/ModifyPanel.vue";
import OwnerPanel from "@/components/user-panel/OwnerPanel.vue";
import CustomerPanel from "@/components/user-panel/CustomerPanel.vue";

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
    ModifyPanel,
    OwnerPanel,
    CustomerPanel
  }
};
</script>

<template>
  <div class="user-panel">
    <LoginPanel v-if="!login" @login="login=true"/>
    <InfoPanel/>
    <ModifyPanel/>
    <OwnerPanel/>
    <CustomerPanel/>
  </div>
</template>

<style scoped>
</style>
