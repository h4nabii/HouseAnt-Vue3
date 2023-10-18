<script>
import SourceItem from "@/components/onwer-panel/SourceItem.vue";

export default {
  props: ["houses"],
  components: {
    SourceItem,
  },
};
</script>

<template>
  <SourceItem v-for="house in houses" :house="house"/>
</template>

<style scoped>

</style>
