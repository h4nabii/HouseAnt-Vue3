<script>
export default {
  name: "BasicLayout",
};
</script>

<template>
  <el-container class="basic-layout">
    <el-header class="header">
      <el-container class="center">
        <slot name="header"/>
      </el-container>
    </el-header>
    <el-main class="main">
      <el-container class="center">
        <slot>
          <router-view/>
        </slot>
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
.basic-layout {
  background-color: #ffe;
}

.center {
  width: 1000px;
  margin: 0 auto;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1f2233;
  border-bottom: 1px lightgray solid;
}

.main {
  padding: 0;
}

.footer {
  background-color: #1f2233;
  border-top: 1px lightgray solid;
}

</style>
