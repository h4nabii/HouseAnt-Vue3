<script>
import "@/assets/panel.css";
import "./css/layout.css";
import houseAnt from "@/assets/houseAnt";

export default {
  data() {
    return {
      form: {
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
    add() {
      houseAnt.houseOwner.createHouse(this.form).then(
          ({message}) => {
            console.log(message);
            this.clear();
          }
      );
    },
    clear() {
      for (let key of Object.keys(this.form)) {
        this.form[key] = undefined;
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
    <div class="title">添加房源</div>
    <div class="input-line">
      <label for="add-name">名称: </label>
      <input class="panel-input" type="text" id="add-name" v-model="form.name">
    </div>
    <div class="input-line">
      <label for="add-address">地址: </label>
      <input class="panel-input" type="text" id="add-address" v-model="form.address">
    </div>
    <div class="input-line">
      <label for="add-price">价格: </label>
      <input class="panel-input" type="number" id="add-price" v-model="form.price">
    </div>
    <div class="input-line">
      <label for="add-area">面积: </label>
      <input class="panel-input" type="number" id="add-area" v-model="form.area">
    </div>
    <div class="input-line">
      <label for="add-floor">楼层: </label>
      <input class="panel-input" type="text" id="add-floor" v-model="form.floor">
    </div>
    <div class="input-line">
      <label for="add-direction">朝向: </label>
      <select class="panel-input" id="add-direction" v-model="form.direction">
        <option value="e">东</option>
        <option value="s">南</option>
        <option value="w">西</option>
        <option value="n">北</option>
      </select>
    </div>
    <div class="input-line">
      <label for="add-layout">布局: </label>
      <input class="panel-input" type="text" id="add-layout" v-model="form.layout">
    </div>
    <div class="input-line">
      <label for="add-developer">开发商: </label>
      <input class="panel-input" type="text" id="add-developer" v-model="form.developer">
    </div>
    <div class="input-line">
      <label for="add-build-time">建成时间: </label>
      <input class="panel-input" type="date" id="add-build-time" v-model="form.build_time">
    </div>
    <div class="input-line">
      <label for="add-has-elevator">电梯: </label>
      <select class="panel-input" id="add-has-elevator" v-model="form.has_elevator">
        <option value=true>有</option>
        <option value=false>无</option>
      </select>
    </div>
    <div class="button-bar">
      <button @click="add" class="panel-button">添加</button>
      <button @click="clear" class="panel-button">清空</button>
    </div>
  </div>
</template>
