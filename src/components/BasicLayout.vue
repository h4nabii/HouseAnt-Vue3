<script>
export default {
  name: "BasicLayout",
};
</script>

<template>
  <el-container class="basic-layout">
    <el-affix position="top">
      <el-header class="header">
        <el-container class="center">
          <slot name="header"/>
        </el-container>
      </el-header>
    </el-affix>
    <el-main class="main">
      <el-container class="center">
        <router-view/>
      </el-container>
    </el-main>
    <el-footer class="footer">
      <el-container class="center">
        <slot name="footer"/>
      </el-container>
    </el-footer>
  </el-container>
</template>

<style scoped>
.center {
  width: 1000px;
  margin: 0 auto;
}

.header {
  background-color: #1f2233;
  border-bottom: 1px lightgray solid;
}
</style>
