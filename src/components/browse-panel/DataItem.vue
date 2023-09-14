<script>
import {h} from "vue";

export default {
  methods: {h},
  props: ["houseInfo"]
};
</script>

<template>
  <div class="data-item">
    <div class="picture" hidden>{{ houseInfo.picture }}</div>
    <img src="@/assets/no-pic.jpg" alt="">
    <div class="info">
      <div class="name">{{ houseInfo.name }}</div>
      <div class="price" v-if="houseInfo.price">
        <span>价格：</span>
        {{ houseInfo.price }}元
      </div>
      <div class="address" v-if="houseInfo.address">
        <span>地址：</span>
        {{ houseInfo.address }}
      </div>
      <div class="area" v-if="houseInfo.area">
        <span>面积：</span>
        {{ houseInfo.area }}
      </div>
      <div class="floor" v-if="houseInfo.floor">
        <span>楼层：</span>
        {{ houseInfo.floor }}
      </div>
      <div class="direction" v-if="houseInfo.direction">
        <span>朝向：</span>
        {{ houseInfo.direction }}
      </div>
      <div class="layout" v-if="houseInfo.layout">
        <span>布局：</span>
        {{ houseInfo.layout }}
      </div>
      <div class="developer" v-if="houseInfo.developer">
        <span>开发商：</span>
        {{ houseInfo.developer }}
      </div>
      <div class="has-elevator" v-if="houseInfo.hasElevator !== null">
        <span>电梯：</span>
        {{ houseInfo.hasElevator ? "有" : "无" }}
      </div>
      <div class="build-time" v-if="houseInfo.buildTime">
        <span>建成时间：</span>
        {{ houseInfo.buildTime }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.data-item {
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: inset grey 1px 1px;

  margin-bottom: 20px;
  padding: 20px;

  display: flex;
  flex-direction: row;
}

img {
  height: 240px;
  margin-right: 50px;
}

.info {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.info div span {
  display: inline-block;
  width: 80px;
}

.info div {
  height: 20px;
}

.info div.name {
  font-size: 24px;
  margin-bottom: 18px;
}

</style>
