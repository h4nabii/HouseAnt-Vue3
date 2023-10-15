<script>
import UserPanel from "@/components/UserPanel.vue";
import BrowsePanel from "@/components/BrowsePanel.vue";
import BasicLayout from "@/components/BasicLayout.vue";
import GlobalHeader from "@/components/GlobalHeader.vue";

export default {
  components: {
    GlobalHeader,
    BasicLayout,
    UserPanel,
    BrowsePanel,
  },
  data() {
    return {
      login: false,
    };
  },

};
</script>

<template>
  <BasicLayout>
    <template #header>
      <GlobalHeader/>
    </template>
    <template #footer></template>
  </BasicLayout>
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
