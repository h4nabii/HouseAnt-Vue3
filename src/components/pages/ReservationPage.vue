<script>
import ReservationList from "@/components/customer-panel/ReservationList.vue";
import houseAnt from "@/assets/houseAnt";
import PageLayout from "@/components/layouts/PageLayout.vue";

export default {
  name: "ReservationPage",
  components: {PageLayout, ReservationList},
  data: () => ({
    reservations: [],
  }),
  created() {
    houseAnt.customer.getMyReservations().then(result => {
      this.reservations = result.reservations;
    });
  },
};
</script>

<template>
  <PageLayout title="我的预约">
    <ReservationList :reservations="reservations"/>
  </PageLayout>
</template>

<style scoped>
</style>
