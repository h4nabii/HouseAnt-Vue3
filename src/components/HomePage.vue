<script>
import PageLayout from "@/components/PageLayout.vue";
import HouseCard from "@/components/HouseCard.vue";
import houseAnt from "@/assets/houseAnt";

export default {
  name: "HomePage",
  components: {PageLayout, HouseCard},
  data: () => ({
    houses: [],
  }),
  created() {
    houseAnt.user.getBrowseData().then(
      result => {
        this.houses = result.houses;
      },
    );
  },
};
</script>

<template>
  <PageLayout title="全部房屋">
    <div class="data-list">
      <HouseCard v-for="house in houses" :key="house.id" :house-info="house"/>
    </div>
  </PageLayout>
</template>

<style scoped>
.data-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}
</style>
