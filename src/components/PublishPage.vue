<script>
import houseAnt from "@/assets/houseAnt";
import PageLayout from "@/components/PageLayout.vue";
import SourceList from "@/components/onwer-panel/SourceList.vue";

export default {
  name: "PublishPage",
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
  <PageLayout title="发布房源">
    <SourceList :houses="houses"/>
  </PageLayout>
</template>

<style scoped>
</style>
