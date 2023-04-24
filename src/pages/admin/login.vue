<script setup>
// input 資料：
const formInput = reactive({
  username: '',
  password: '',
});

// v-if 資料
let isUsernameEmpty = ref(false);
let isPasswordEmpty = ref(false);

// 送出表單
const handleSubmit = () => {
  if (formInput.username !== '' && formInput.password !== '') {
    console.log('送出表單' + formInput.username + formInput.password);
  } else {
    formInput.username === ''
      ? (isUsernameEmpty.value = true)
      : (isUsernameEmpty.value = false);
    formInput.password === ''
      ? (isPasswordEmpty.value = true)
      : (isPasswordEmpty.value = false);
  }
};

// 重置表單
const handleReset = () => {
  formInput.username = '';
  formInput.password = '';
  isUsernameEmpty.value = false;
  isPasswordEmpty.value = false;
};

// 其他：
</script>
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
      <el-form :model="formInput" class="demo-ruleForm" label-position="center">
        <!-- 表單：帳號 -->
        <el-form-item label="">
          <p>帳號</p>
          <el-input v-model="formInput.username" placeholder="" />
          <p v-if="isUsernameEmpty">帳號不能為空</p>
        </el-form-item>
        <!-- 表單：密碼 -->
        <el-form-item label="">
          <p>密碼</p>
          <el-input
            v-model="formInput.password"
            type="password"
            placeholder=""
            show-password
          />
          <p v-if="isPasswordEmpty">密碼不能為空</p>
        </el-form-item>
        <!-- 表單：按鈕 -->
        <el-form-item>
          <el-button type="primary" style="width: 46%" @click="handleSubmit"
            >送出</el-button
          >
          <el-button style="width: 46%" @click="handleReset">重置</el-button>
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
  background-image: url('@/assets/img/img_kidsplayground.jpg');
  width: 300px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
<route>
  {
      meta: {
          layout: false,
      }
  }
  </route>
