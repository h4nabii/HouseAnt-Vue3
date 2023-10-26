<script>
import BasicLayout from "@/components/layouts/BasicLayout.vue";
import GlobalHeader from "@/components/layouts/GlobalHeader.vue";
import GlobalFooter from "@/components/layouts/GlobalFooter.vue";

export default {
  components: {
    BasicLayout,
    GlobalFooter,
    GlobalHeader,
  },
};
</script>

<template>
  <BasicLayout>
    <template #header>
      <GlobalHeader/>
    </template>
    <template #footer>
      <GlobalFooter/>
    </template>
  </BasicLayout>
</template>

<style scoped>
</style>
