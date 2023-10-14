<script>
import DataList from "@/components/browse-panel/DataList.vue";
import FilterPanel from "@/components/browse-panel/FilterPanel.vue";
import houseAnt from "@/assets/houseAnt";
import "@/assets/panel.css";

export default {
  data() {
    return {
      houses: []
    };
  },
  components: {
    DataList,
    FilterPanel
  },
  created() {
    houseAnt.user.getBrowseData().then(
        result => {
          console.log(result);
          this.houses = result.houses;
        }
    );
  }
};
</script>

<template>
  <div class="data-panel border-panel">
    <div class="title">房源</div>
    <!--    <FilterPanel/>-->
    <DataList :houses="houses"/>
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
</style>
