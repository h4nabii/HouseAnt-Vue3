<script>
import DataItem from "@/components/browse-panel/DataItem.vue";

export default {
  props: ["houses"],
  components: {DataItem}
};
</script>

<template>
  <div class="data-list">
    <ul>
      <DataItem v-for="house in houses" :house-info="house"/>
    </ul>
  </div>
</template>

<style scoped>
</style>
