<script>
import image from "@/assets/no-pic.jpg";

export default {
  name: "HouseCard",
  props: ["houseInfo"],
  data: () => ({
    image,
  }),
};
</script>

<template>
  <div class="card">
    <img class="image" :src="image" alt="image">
    <div class="data">
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
.card {
  width: 290px;
  height: 320px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 20px;
  box-shadow: grey 2px 2px 0 0;
  overflow: hidden;
  margin: 10px;
}

.card .image {
  width: 100%;
  height: 60%;
  object-fit: cover;
  object-position: top;
}

.card .data {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
}
</style>
