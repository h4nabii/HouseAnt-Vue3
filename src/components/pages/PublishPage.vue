<script>
import PageLayout from "@/components/layouts/PageLayout.vue";
import houseAnt from "@/assets/houseAnt";

export default {
  name: "PublishPage",
  components: {PageLayout},
  data() {
    return {
      name: "",
      address: "",
      price: "",
      details: "",
      area: "",
      picture: "",
    };
  },
  methods: {
    async submit() {
      let {user, error} = await houseAnt.user.getInfo();
      if (error) throw error;

      let {message} = await houseAnt.houseOwner.createHouse({
        hostName: user.username,
        ...this.$data,
      });
      console.log(message);
    },
  },
};
</script>

<template>
  <PageLayout title="发布房源">
    <el-form class="form" label-position="right" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="name" clearable/>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="address" clearable/>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="price" type="number">
          <template #append>元/晚</template>
        </el-input>
      </el-form-item>
      <el-form-item label="详细描述">
        <el-input
          v-model="details"
          type="textarea"
          :autosize="{
            minRows: 3,
            maxRows: 20,
          }"
          resize="none"
          maxlength="1000"
          show-word-limit
        />
      </el-form-item>
      <el-form-item label="面积">
        <el-input v-model="area" type="number">
          <template #append>
            <span>m<sup>2</sup></span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-input v-model="picture" clearable/>
      </el-form-item>
      <el-form-item>
        <el-button color="#1f2233" @click="submit" type="primary">创建房源</el-button>
      </el-form-item>
    </el-form>
  </PageLayout>
</template>

<style scoped>
.form {
  margin: 0 30px 110px 0;
}
</style>
