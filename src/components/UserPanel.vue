<script>
import LoginPanel from "@/components/user-panel/LoginPanel.vue";
import InfoPanel from "@/components/user-panel/InfoPanel.vue";

export default {
  data() {
    return {
      loggedIn: false,
      registering: false
    };
  },
  methods: {
  },
  computed: {
    componentPanel() {
      return this.loggedIn ? InfoPanel : LoginPanel;
    }
  },
  components: {
    LoginPanel,
    InfoPanel
  }
};
</script>

<template>
  <div class="user-panel">
    <component :is="componentPanel" @loggedIn="loggedIn=true"/>
  </div>
</template>

<style scoped>
.user-panel {
//width: 500px;
}
</style>
