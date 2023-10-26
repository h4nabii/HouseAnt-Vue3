<script>
import PageLayout from "@/components/layouts/PageLayout.vue";
import HouseCard from "@/components/HouseCard.vue";
import houseAnt from "@/assets/houseAnt";

let loading = false;

export default {
  name: "HomePage",
  components: {PageLayout, HouseCard},
  data: () => ({
    page: 0,
    houses: [],
  }),
  methods: {
    async appendData() {
      if (loading) return;
      this.page++;
      loading = true;
      let {houses} = await houseAnt.user.getBrowseData(18, this.page);

      /* 模拟网络延时，测试 loading 锁 */
      // await new Promise(r => setTimeout(r, 500));

      if (houses) {
        this.houses.push(...houses);
      }
      loading = false;
    },
  },
  created() {
    this.appendData();
    window.addEventListener("scroll", () => {
      let el = document.documentElement;
      let distance = (el.scrollHeight - el.clientHeight) - el.scrollTop;
      if (distance < 100) {
        this.appendData();
      }
    });
  },
};
</script>

<template>
  <PageLayout title="全部房屋">
    <div class="data-list">
      <button @click="this.$router.push('/about')">123</button>
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
