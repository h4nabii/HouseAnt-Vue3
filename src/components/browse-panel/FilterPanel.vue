<script>
export default {
  data() {

  }
};
</script>

<template>
  <div class="filter">
    <div class="input-panel">
      <div class="label">价位</div>
      <div class="input-line">
        <input type="number">
        <input type="number">
      </div>
      <div class="input-line">
        <div class="label">建造时间</div>
        <input type="number">
        <input type="number">
      </div>
      <div class="input-line">
        <div class="label">面积</div>
        <input type="number">
        <input type="number">
      </div>
      <div class="input-line">
        <div class="label">楼层</div>
        <input type="number">
        <input type="number">
      </div>
      <fieldset class="input-line">
        <legend class="label">电梯</legend>
        <input id="no-limit" name="elevator" type="radio"/>
        <label for="no-limit">不限</label>
        <input id="ele_yes" name="elevator" type="radio"/>
        <label for="ele_yes">有</label>
        <input id="ele_no" name="elevator" type="radio"/>
        <label for="ele_no">无</label>
      </fieldset>
      <div class="input-line">
        <div class="label">布局</div>
        <select>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
    </div>
    <button>查询</button>
  </div>
</template>

<style scoped>

</style>
