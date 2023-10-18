<script>
import "@/assets/panel.css";

export default {
  name: "PageLayout",
  props: ["title"],
};
</script>

<template>
  <div class="page border-panel">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.page .title {
  height: 50px;
  font-size: 24px;
}
</style>
