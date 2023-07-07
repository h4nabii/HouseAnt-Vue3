<script>
import HouseAdd from "./HouseAdd.vue";
import HouseModify from "./HouseModify.vue";
import ReservationAdd from "./ReservationAdd.vue";
import ReservationModify from "./ReservationModify.vue";

export default {
  components: {
    ReservationModify,
    ReservationAdd,
    HouseModify,
    HouseAdd
  }
};
</script>

<template>
  <div class="container">
    <header>HouseAnt</header>
    <div class="content">
      <HouseModify/>
      <HouseAdd/>
      <ReservationModify/>
      <ReservationAdd/>
    </div>
    <a href="/">
      <button class="router border-panel">返回</button>
    </a>
    <footer>HouseAnt</footer>
  </div>
</template>

<style>
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px auto;
}

.content > * {
  margin-bottom: 50px;
}
</style>
