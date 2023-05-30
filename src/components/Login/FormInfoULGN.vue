<script setup>
import axios from 'axios';

////// 帳號 + 密碼 的 input欄位
const account = ref(''); // 用作v-model雙向數據綁定
const pwd = ref(''); // 用作v-model雙向數據綁定
const inputInfos = ref([
  {
    title: '帳號：',
    type: 'text',
    id: 'account',
    placeholder: '請輸入您的Email或手機',
    value: account.value,
  },
  {
    title: '密碼：',
    type: 'password',
    id: 'pwd',
    placeholder: '請輸入您的密碼',
    value: pwd.value,
  },
]);
// 會員註冊 + 忘記密碼 的 a標籤
const aLinks = ref([
  {
    id: '1',
    url: '#',
    text: '會員註冊',
    icon: 'User',
    url: '/register',
  },
  {
    id: '2',
    url: '#',
    text: '忘記密碼',
    icon: 'Unlock',
    url: '/ForgetPassword',
  },
]);

//////功能-會員帳號驗證格式

////email驗證
const emailRegex =
  /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const isInputFail = ref(false);

const blurCheck = inputType => {
  if (inputType !== 'account') return;
  const inputAccount = inputInfos.value[0].value;
  if (inputAccount === '') {
    isInputFail.value = false;
    return;
  }
  const isPhoneNumber =
    !isNaN(inputAccount) &&
    inputAccount.length === 10 &&
    inputAccount.trim().length > 0 &&
    inputAccount[0] === '0' &&
    inputAccount[1] === '9';

  const isEmail = emailRegex.test(inputAccount);
  isInputFail.value = !(isPhoneNumber || isEmail);
};

////確認資料

const router = useRouter();

axios
  .post('/PDO/frontEnd/memberLogin/memberLoginCheck.php')
  .then(res => {
    if (res.data === '') {
      console.log('還沒登入');
    } else {
      console.log('已經登入了');
      router.push('../../admin/touristproductorder');
    }
  })
  //
  .catch(err => {
    console.log(err);
    alert('登入狀態檢查出錯');
  });

////資料送出
const handleSubmit = () => {
  //檢查是否輸入失敗
  if (isInputFail.value) {
    return;
  }
  // username 和 pwd
  axios
    .post('/PDO/frontEnd/memberLogin/memberLogin.php', {
      account: inputInfos.value[0].value,
      pwd: inputInfos.value[1].value,
    })
    .then(res => {
      console.log(res.data);
      if(res.data === '登入成功'){
        alert('登入成功');
        router.push('/admin/touristmember');
      } else {
        alert('錯誤帳號密碼');
      }
    
    })
    .catch(err => {
      console.log(err);
      alert('伺服器問題');
    });
  };
</script>

<template>
  <section class="middle">
    <!-- 帳號 + 密碼 的 input欄位 -->
    <div class="middle__form">
      <div
        class="middle__form--wrapOfLabelInput"
        v-for="(inputInfo, index) in inputInfos"
        v-bind:key="inputInfo.id"
      >
        <label class="middle__form--label">{{ inputInfo.title }}</label>
        <input
          class="middle__form--input"
          v-bind:type="inputInfo.type"
          v-bind:id="inputInfo.id"
          v-bind:placeholder="inputInfo.placeholder"
          v-model="inputInfo.value"
          @blur="blurCheck(inputInfo.id)"
        />
        <span v-if="isInputFail && inputInfo.id === 'account'"
          >請輸入正確帳號
        </span>
      </div>

      <!-- 會員註冊 + 忘記密碼 的 a標籤 -->
      <div class="middle__form--bigWrapOfIconA">
        <div
          class="middle__form--wrapOfIconA"
          v-for="(aLink, index) in aLinks"
          v-bind:key="aLink.id"
          v-bind:href="aLink.url"
        >
          <el-icon class="middle__form--Icon"
            ><component :is="aLink.icon"
          /></el-icon>
          <!-- 在 <el-icon> 组件内部動態渲染 aLink.icon 所代表的组件 -->
          <!-- <a class="middle__form--A">{{ aLink.text }}</a> -->
          <router-link :to="aLink.url" class="middle__form--Link">{{
            aLink.text
          }}</router-link>
        </div>
      </div>

      <Button
        class="middle__form--Btn"
        type="submit"
        id="Submit"
        @click="handleSubmit"
      >
        登入
      </Button>
    </div>
    <!-- <form action="middle__form">
    </form> -->
  </section>
</template>

<style lang="scss" scoped>
.middle {
  display: flex;
  justify-content: center;

  &__form {
    &--wrapOfLabelInput {
      margin-bottom: 36px;
    }
    &--label {
      font-size: 20px;
      margin-right: 19px;
    }
    &--input {
      width: 300px;
      height: 60px;
      border-width: 1px;
      border-color: lightgray;
      border-radius: 10px;
      padding-left: 9px;
    }
    &--input::placeholder {
      font-size: 18px;
    }

    &--bigWrapOfIconA {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 228px;
      margin: 0 auto;
    }
    &--wrapOfIconA {
      display: inline-block;
      margin-bottom: 39px;
      // color: ;
    }
    &--Icon {
      margin-right: 9px;
    }
    &--Link {
      font-weight: 400;
      font-size: 16px;
      line-height: 19.36px;
      color: $textcolor4;
      text-decoration: none;
    }

    &--Btn {
      background-color: #d1825b;
      display: block;
      margin: 0 auto;
      width: 300px;
      height: 60px;
      border-radius: 10px;
      margin-bottom: 50px;
      font-weight: 400;
      font-size: 24px;
    }
  }
}

span {
  display: flex;
  margin-left: 90px;
  margin-top: 10px;
  color: red;
  font-weight: bold;
}
</style>
