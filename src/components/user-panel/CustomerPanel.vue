<script>
import ReservationList from "@/components/customer-panel/ReservationList.vue";
import houseAnt from "@/assets/houseAnt";
import "@/assets/panel.css";

export default {
  components: {ReservationList},
  data() {
    return {
      reservations: []
    };
  },
  created() {
    houseAnt.customer.getMyReservations().then(result => {
      this.reservations = result.reservations;
    });
  },
};
</script>

<template>
  <div class="source-panel border-panel">
    <div class="title">我的预约</div>
    <ReservationList :reservations="reservations"/>
  </div>
</template>

<style scoped>

</style>
