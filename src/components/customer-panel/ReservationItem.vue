<script>
export default {
  props: ["reservation"]
};
</script>

<template>
  <div class="border-panel">
    <ul>
      <li v-for="value in reservation">{{ value }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
