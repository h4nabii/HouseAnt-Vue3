<script>
export default {
  props: ["houseInfo"]
};
</script>

<template>
  <ul>
    <li v-for="info in houseInfo">{{ info }}</li>
  </ul>
</template>

<style scoped>
ul {
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: inset gray 1px 1px;

  margin-bottom: 20px;
  padding: 20px;
}
</style>
