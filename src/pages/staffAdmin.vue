<script setup>
// 定義一筆資料並綁定JS
const formInput = reactive({
  username: "",
  password: "",
});

const input = ref("");
meta: {
  layout: false; // 指定該頁面不使用任何佈局
}
</script>
<route>
  {
      meta: {
          layout: 'backStage'
      }
  }
  </route>
<template>
  <layout name="cms_layout">
    <!-- 这里是内容部分 -->
  </layout>
  <div class="container">
    <div class="image"></div>
    <div class="box" style="padding: 30px">
      <!-- 標題 -->
      <el-text class="title" size="large">園區後台</el-text>
      <!-- 表單 -->
      <el-form
        ref="ruleFormRef"
        :model="formInput"
        :rules="rules"
        class="demo-ruleForm"
        label-position="center"
      >
        <!-- 表單：帳號 -->
        <el-form-item label="" prop="username">
          <p>帳號</p>
          <el-input v-model="formInput.username" placeholder="" />
        </el-form-item>
        <!-- 表單：密碼 -->
        <el-form-item label="" prop="password ">
          <p>密碼</p>
          <el-input
            v-model="formInput.password"
            type="password"
            placeholder=""
            show-password
          />
        </el-form-item>
        <!-- 表單：按鈕 -->
        <el-form-item>
          <div></div>
          <el-button type="primary" style="width: 46%">送出</el-button>
          <el-button style="width: 46%">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1280px;
  display: flex;
  justify-content: center;
}
.box {
  display: flex;
  flex-direction: column;
}

.title {
  margin-bottom: 20px;
  font-size: 20px;
}

.image {
  background-image: url("../assets/img/img_kidsplayground.jpg");
  width: 300px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
