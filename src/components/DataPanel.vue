<script>
export default {
  data() {
    return {};
  }
};
</script>

<template>
  <div class="data-panel">
    <div class="filter">

    </div>
  </div>
</template>

<style scoped>

.data-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 700px;
  height: 100px;

  border: 1px solid black;
  border-radius: 20px;
  box-shadow: #aaa 8px 8px 10px -3px;

  padding: 40px 20px;
  box-sizing: border-box;

  background-color: white;
  color: black;
  font-family: Consolas, serif;
}

.filter {
  background-color: lightyellow;
}
</style>
