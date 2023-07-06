<script>
import ReservationItem from "@/components/customer-panel/ReservationItem.vue";

export default {
  props: ["reservations"],
  components: {
    ReservationItem
  }
};
</script>

<template>
  <ReservationItem v-for="reserve in reservations" :reservation="reserve"/>
</template>

<style scoped>

</style>
