<script>
import UserPanel from "@/components/UserPanel.vue";
import DataPanel from "@/components/DataPanel.vue";

export default {
  components: {
    UserPanel,
    DataPanel
  },
  data() {
    return {};
  }
};
</script>

<template>
  <div class="container">
    <header>HouseAnt</header>
    <div class="content">
      <UserPanel/>
      <DataPanel/>
    </div>
    <footer>HouseAnt</footer>
  </div>
</template>

<style scoped>
.container {
  width: 1000px;

  margin: 0 auto;
  padding: 20px 100px 200px;

  border-radius: 50px;
  border: 2px solid gray;
  box-shadow: 0 10px 10px -10px;

  background-color: white;
}

header {
  --height: 100px;
  height: var(--height);
  line-height: var(--height);

  font-size: 40px;
  font-family: Consolas, serif;
  font-weight: bolder;
  color: gray;
  text-align: right;
}

footer {
  --height: 100px;
  height: var(--height);
  line-height: var(--height);

  font-size: 40px;
  font-family: Consolas, serif;
  font-weight: bolder;
  color: gray;
  text-align: right;
}

.content {
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
