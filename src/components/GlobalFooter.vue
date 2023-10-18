<script>

export default {
  data: () => ({
    a: "leon_xenos.xu@outlook.com",
  }),
  name: "GlobalFooter",
};
</script>

<template>
  <div class="footer">
    <span>@h4nabii</span>
    <el-divider direction="vertical"/>
    <a href="https://github.com/h4nabii">Github Home</a>
    <el-divider direction="vertical"/>
    <span>Mail: leon_xenos.xu@outlook.com</span>
    <el-divider direction="vertical"/>
    <span>QQ: 1036795978</span>
  </div>
</template>

<style scoped>
.footer {
  height: 60px;
  line-height: 60px;
  width: 100%;
  text-align: center;
  color: white;
}

a {
  color: #66ccff;
}

a:hover {
  color: #77f;
}
</style>
