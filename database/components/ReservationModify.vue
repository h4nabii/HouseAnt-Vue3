<script>
import "@/assets/panel.css";
import "./css/layout.css";
import houseAnt from "@/assets/houseAnt";

export default {
  data() {
    return {
      reservations: [],
      selectedRes: {
        res_id: undefined,
        house_id: undefined,
        time: undefined,
        type: undefined,
        content: undefined
      },
      selected: false
    };
  },
  methods: {
    refresh() {
      houseAnt.customer.getMyReservations().then(
          ({reservations}) => {
            this.reservations = reservations;
          }
      );
    },
    update() {
      houseAnt.customer.updateReservation(this.selectedRes).then(
          ({message}) => {
            console.log(message);
            this.clear();
          }
      );
    },
    remove() {
      houseAnt.customer.deleteReservation(this.selectedRes.res_id).then(
          ({message}) => {
            console.log(message);
            this.clear();
          }
      );
    },
    clear() {
      for (let key of Object.keys(this.selectedRes)) {
        this.selectedRes[key] = undefined;
        this.refresh();
      }
    }
  },
  created() {
    this.refresh();
  }
};
</script>

<template>
  <div class="database-panel border-panel">
    <div class="title">预约管理</div>
    <select class="panel-input selector" @change="refresh(); this.selected=true;" v-model="selectedRes" name="house"
            id="house">
      <option v-for="reservation in reservations" :value="reservation">{{ reservation.res_id }}</option>
    </select>
    <div class="input-line">
      <label for="modify-res-ID">ID: </label>
      <input class="panel-input" readonly type="number" id="modify-res-ID" v-model="selectedRes.res_id">
    </div>
    <div class="input-line">
      <label for="modify-res-house-id">房屋ID: </label>
      <input class="panel-input" readonly type="text" id="modify-res-house-id" v-model="selectedRes.house_id">
    </div>
    <div class="input-line">
      <label for="modify-time">时间: </label>
      <input class="panel-input" type="date" id="modify-time" v-model="selectedRes.time">
    </div>
    <div class="input-line">
      <label for="modify-type">类型: </label>
      <input class="panel-input" type="text" id="modify-type" v-model="selectedRes.type">
    </div>
    <div class="input-line">
      <label for="modify-content">内容: </label>
      <input class="panel-input" type="text" id="modify-content" v-model="selectedRes.content">
    </div>
    <div class="button-bar">
      <button @click="update" :disabled="!selected" class="panel-button">修改</button>
      <button @click="remove" :disabled="!selected" class="panel-button">删除</button>
    </div>
  </div>
</template>
