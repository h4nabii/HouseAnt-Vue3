<script>
import DataItem from "@/components/browse-panel/DataItem.vue";

export default {
  components: {DataItem},
  data() {
    return {
      houseList: []
    };
  },
  created() {
    this.houseList = [
      {
        name: "name1",
        address: "add",
        direction: undefined,
        area: "area?",
        layout: "l1",
        price: 123,
        picture: undefined,
        developer: "dev1",
        floor: "B1",
        has_elevator: false,
        build_time: new Date()
      }, {
        name: "name2",
        address: "ad?",
        direction: "east",
        area: "area?-",
        layout: "l2",
        price: 12300,
        picture: undefined,
        developer: "dev67",
        floor: "F2",
        has_elevator: true,
        build_time: new Date()
      }
    ];
  }
};
</script>

<template>
  <div class="data-list">
    <ul>
      <DataItem v-for="house in houseList" :house-info="house"/>
    </ul>
  </div>
</template>

<style scoped>
</style>
