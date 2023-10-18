<script>
import BasicLayout from "@/components/BasicLayout.vue";
import GlobalHeader from "@/components/GlobalHeader.vue";
import GlobalFooter from "@/components/GlobalFooter.vue";

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
