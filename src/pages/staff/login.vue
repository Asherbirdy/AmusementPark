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

axios
  .post('/api/PDO/backEnd/staffAccount/staffLoginCheck.php')
  .then(res => {
    if(res.data ==="") {
      console.log("還沒登入");
    }else {
      router.push('/staff/parkstatus');
      console.log("已經登入了");
    }
  })
  .catch(err => {
        console.log(err);
        alert('登入狀態檢查出錯');
      });

// 送出表單
const handleSubmit = () => {
  if (formInput.account !== '' && formInput.pwd !== '') {
    // console.log('送出表單' + formInput.account + formInput.pwd);
    isUsernameEmpty.value = false;
    isPasswordEmpty.value = false;

    // username 和 password
    axios
      .post('/api/PDO/backEnd/staffAccount/staffLogin.php', {
        account: formInput.account,
        pwd: formInput.pwd,
      })
      .then(res => {
        console.log(res.data);
        // const dataToJSON = JSON.stringify(res.data);

        // 如果登入成功:
        if (res.data === true) {
          alert('登入成功');

          // sessionStorage.setItem('UserData', dataToJSON);
          router.push('/staff/parkstatus');
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

onMounted(() => {
  gsap.from('.container', {
    autoAlpha: 0,
  });
});
</script>
<template>
  <layout name="cms_layout">
    <!-- 这里是内容部分 -->
  </layout>
  <div class="container">
    <div class="wrapper">
      <div class="image"></div>
      <div class="box">
        <!-- 標題 -->
        <el-text class="title">園區後台</el-text>
        <!-- 表單 -->
        <el-form
          :model="formInput"
          class="demo-ruleForm"
          label-position="center"
        >
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
  </div>
</template>

<style scoped>
.container {
  margin-top: 200px;
}

.wrapper {
  width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-shadow: 0px 0px 25px 3px rgba(202, 202, 202, 0.75);
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
}

.title {
  margin-top: 20px;
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
