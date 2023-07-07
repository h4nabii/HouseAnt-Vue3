<script>
import "@/assets/panel.css";
import "./css/layout.css";
import houseAnt from "@/assets/houseAnt";

export default {
  data() {
    return {
      houses: [],
      selectedHouse: {
        house_id: undefined,
        name: undefined,
        address: undefined,
        price: undefined,
        area: undefined,
        picture: undefined,
        floor: undefined,
        direction: undefined,
        layout: undefined,
        developer: undefined,
        build_time: undefined,
        has_elevator: undefined
      },
      selected: false
    };
  },
  methods: {
    refresh() {
      houseAnt.houseOwner.getMyHouses().then(
          ({houses}) => {
            this.houses = houses;
          }
      );
    },
    update() {
      houseAnt.houseOwner.updateHouse(this.selectedHouse).then(
          ({message}) => {
            console.log(message);
            this.clear();
          }
      );
    },
    remove() {
      houseAnt.houseOwner.deleteHouse(this.selectedHouse.house_id).then(
          ({message}) => {
            console.log(message);
            this.clear();
          }
      );
    },
    clear() {
      for (let key of Object.keys(this.selectedHouse)) {
        this.selectedHouse[key] = undefined;
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
    <div class="title">房源管理</div>
    <select class="panel-input selector" @change="refresh(); this.selected=true;" v-model="selectedHouse" name="house"
            id="house">
      <option v-for="house in houses" :value="house">{{ house.name }}</option>
    </select>
    <div class="input-line">
      <label for="modify-ID">ID: </label>
      <input class="panel-input" readonly type="number" id="modify-ID" v-model="selectedHouse.house_id">
    </div>
    <div class="input-line">
      <label for="modify-name">名称: </label>
      <input class="panel-input" type="text" id="modify-name" v-model="selectedHouse.name">
    </div>
    <div class="input-line">
      <label for="modify-address">地址: </label>
      <input class="panel-input" type="text" id="modify-address" v-model="selectedHouse.address">
    </div>
    <div class="input-line">
      <label for="modify-price">价格: </label>
      <input class="panel-input" type="number" id="modify-price" v-model="selectedHouse.price">
    </div>
    <div class="input-line">
      <label for="modify-area">面积: </label>
      <input class="panel-input" type="number" id="modify-area" v-model="selectedHouse.area">
    </div>
    <div class="input-line">
      <label for="modify-floor">楼层: </label>
      <input class="panel-input" type="text" id="modify-floor" v-model="selectedHouse.floor">
    </div>
    <div class="input-line">
      <label for="modify-direction">朝向: </label>
      <select class="panel-input" id="modify-direction" v-model="selectedHouse.direction">
        <option value="e">东</option>
        <option value="s">南</option>
        <option value="w">西</option>
        <option value="n">北</option>
      </select>
    </div>
    <div class="input-line">
      <label for="modify-layout">布局: </label>
      <input class="panel-input" type="text" id="modify-layout" v-model="selectedHouse.layout">
    </div>
    <div class="input-line">
      <label for="modify-developer">开发商: </label>
      <input class="panel-input" type="text" id="modify-developer" v-model="selectedHouse.developer">
    </div>
    <div class="input-line">
      <label for="modify-build-time">建成时间: </label>
      <input class="panel-input" type="date" id="modify-build-time" v-model="selectedHouse.build_time">
    </div>
    <div class="input-line">
      <label for="modify-has-elevator">电梯: </label>
      <select class="panel-input" id="modify-has-elevator" v-model="selectedHouse.has_elevator">
        <option value="true">有</option>
        <option value="false">无</option>
      </select>
    </div>
    <div class="button-bar">
      <button @click="update" :disabled="!selected" class="panel-button">修改</button>
      <button @click="remove" :disabled="!selected" class="panel-button">删除</button>
    </div>
  </div>
</template>
