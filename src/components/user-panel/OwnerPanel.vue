<script>
import SourceItem from "@/components/onwer-panel/SourceItem.vue";
import houseAnt from "@/assets/houseAnt";
import SourceList from "@/components/onwer-panel/SourceList.vue";

export default {
  data() {
    return {
      houses: []
    };
  },
  components: {
    SourceList,
    SourceItem
  },
  created() {
    houseAnt.houseOwner.getMyHouses().then(
        result => {
          this.houses = result.houses;
        }
    );
  }
};
</script>

<template>
  <div class="owner-panel border-panel">
    <div class="title">我的房源</div>
    <SourceList :houses="houses"/>
  </div>
</template>

<style scoped>

</style>
