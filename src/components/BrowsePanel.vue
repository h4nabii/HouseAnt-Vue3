<script>
import DataList from "@/components/browse-panel/DataList.vue";
import "@/assets/panel.css";

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
  <div class="data-panel border-panel">
    <div class="title">房源</div>
    <div class="filter">

    </div>
    <DataList/>
  </div>
</template>

<style scoped>

.data-panel {
  display: flex;
  flex-direction: column;
}

.data-panel .title {
  height: 50px;
  font-size: 24px;
}

.filter {
  background-color: lightyellow;
}
</style>
