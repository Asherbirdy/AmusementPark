<script setup>
import axios from 'axios';
// input 資料：
const formInput = reactive({
  account: '',
  pwd: '',
});

const router = useRouter();

// v-if 資料
let isUsernameEmpty = ref(false);
let isPasswordEmpty = ref(false);

// 送出表單
const handleSubmit = () => {
  if (formInput.account !== '' && formInput.pwd !== '') {
    console.log('送出表單' + formInput.account + formInput.pwd);
    isUsernameEmpty.value = false;
    isPasswordEmpty.value = false;

    // username 和 password
    axios
      .post('/api/PDO/login.php', {
        account: formInput.account,
        pwd: formInput.pwd,
      })
      .then(res => {
        console.log(res.data);
        const dataToJSON = JSON.stringify(res.data);

        // 如果登入成功:
        if (res.data.status === 'true') {
          alert('登入成功');

          sessionStorage.setItem('UserData', dataToJSON);
          router.push('/staff/home');
        } else {
          alert('錯誤帳號密碼');
        }
      })
      .catch(err => {
        console.log(err);
        alert('伺服器問題');
      });
  } else {
    formInput.Account === ''
      ? (isUsernameEmpty.value = true)
      : (isUsernameEmpty.value = false);
    formInput.PWD === ''
      ? (isPasswordEmpty.value = true)
      : (isPasswordEmpty.value = false);
  }
};

// 重置表單
const handleReset = () => {
  formInput.account = '';
  formInput.pwd = '';
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
          <el-input v-model="formInput.account" placeholder="" />
          <p v-if="isUsernameEmpty">帳號不能為空</p>
        </el-form-item>
        <!-- 表單：密碼 -->
        <el-form-item label="">
          <p>密碼</p>
          <el-input
            v-model="formInput.pwd"
            type="password"
            placeholder=""
            show-password
          />
          <p v-if="isPasswordEmpty">密碼不能為空</p>
        </el-form-item>
        <!-- 表單：按鈕 -->
        <el-form-item>
          <el-button
            name="submit"
            type="primary"
            style="width: 46%"
            @click="handleSubmit"
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
