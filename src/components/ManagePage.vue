<script>
import PageLayout from "@/components/PageLayout.vue";
import SourceList from "@/components/onwer-panel/SourceList.vue";
import houseAnt from "@/assets/houseAnt";

export default {
  name: "ManagePage",
  components: {PageLayout, SourceList},
  data() {
    return {
      houses: [],
    };
  },
  created() {
    houseAnt.houseOwner.getMyHouses().then(
      result => {
        this.houses = result.houses;
      },
    );
  },
};
</script>

<template>
  <PageLayout title="我的房源">
    <SourceList :houses="houses"/>
  </PageLayout>
</template>

<style scoped>
</style>
