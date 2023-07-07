<script>
import "@/assets/panel.css";
import "./css/layout.css";
import houseAnt from "@/assets/houseAnt";

export default {
  data() {
    return {
      sources: [],
      form: {
        res_id: undefined,
        house_id: undefined,
        time: undefined,
        type: undefined,
        content: undefined
      },
    };
  },
  methods: {
    getSource() {
      houseAnt.user.getBrowseData().then(
          ({houses}) => {
            this.sources = houses;
          }
      );
    },
    add() {
      houseAnt.customer.createReservation(this.form).then(
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
    this.getSource();
  }
};
</script>

<template>
  <div class="database-panel border-panel">
    <div class="title">新建预约</div>
    <div class="input-line">
      <label for="add-house">房屋: </label>
      <select class="panel-input" id="add-house" v-model="form.house_id">
        <option v-for="house in sources" :value="house.house_id">{{ house.name }}</option>
      </select>
    </div>
    <div class="input-line">
      <label for="add-time">时间: </label>
      <input class="panel-input" type="date" id="add-time" v-model="form.time">
    </div>
    <div class="input-line">
      <label for="add-type">类型: </label>
      <input class="panel-input" type="text" id="add-type" v-model="form.type">
    </div>
    <div class="input-line">
      <label for="add-content">内容: </label>
      <input class="panel-input" type="text" id="add-content" v-model="form.content">
    </div>
    <div class="button-bar">
      <button @click="add" class="panel-button">添加</button>
      <button @click="clear" class="panel-button">清空</button>
    </div>
  </div>
</template>
