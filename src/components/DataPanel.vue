<script>
import DataList from "@/components/data-panel/DataList.vue";
import "@/assets/panel.css"

export default {
  data() {
    return {};
  },
  components: {
    DataList
  }
};
</script>

<template>
  <div class="data-panel panel">
    <div class="title">House</div>
    <div class="filter">

    </div>
    <DataList/>
  </div>
</template>

<style scoped>

.data-panel {
  display: flex;
  flex-direction: column;

  width: 700px;
}

.data-panel .title {
  height: 50px;
  font-size: 24px;
}

.filter {
  background-color: lightyellow;
}
</style>
