<script>
import "@/assets/panel.css";

export default {
  props: ["house"],
};
</script>

<template>
  <div class="border-panel">
    <ul>
      <li v-for="value in house">{{ value }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
