<template>
  <section class="middle">
    <div action="">
      <div class="method">
        認證方式：
        <input
          type="radio"
          name="method"
          value="email"
          v-model="selectedMethod"
          id="email"
        />
        <label for="email">
          <p>E-mail</p>
        </label>
        <input
          type="radio"
          name="method"
          value="phone"
          v-model="selectedMethod"
          id="phone"
        />
        <label for="phone">
          <p>手機號碼</p>
        </label>
      </div>
      <div v-for="(item, index) in inputInfos" :key="item.id" class="user-input">
        <label>{{ item.title }}</label>
        <input
          :type="item.type"
          :id="index"
          v-model="item.value"
          :placeholder="item.placeholder"
          @blur="blurCheck(item.id)"
        />
        <span v-if="isInputFail && item.id === 'account'"
          >請輸入正確帳號
        </span>
      </div>
      <div class="btn">
        <router-link to="/" class="routerlink">
          <Button class="middle__form--Btn" type="submit" id="Submit">
            取消
          </Button>
        </router-link>

        <Button
          class="middle__form--Btn"
          type="submit"
          id="Submit"
          @click="handleSubmit"
        >
          確認送出
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from 'axios';

const account = ref('');
const name = ref('');
const selectedMethod = ref('');

const inputInfos = ref([
  {
    title: '帳號：',
    type: 'text',
    id: 'account',
    value: account,
    placeholder: '請輸入您的帳號或手機',
  },
  {
    title: '姓名：',
    type: 'text',
    id: 'name',
    value: name,
    placeholder: '請輸入您的姓名',
  },
]);

//////會員帳密驗證格式
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


//////資料送出確認有無此帳密
const router = useRouter();

const handleSubmit = () => {
  // if (inputInfos.value[0].value === '' || inputInfos.value[1].value === '') {
    if (isInputFail.value ||inputInfos.value[1].value === '' ) {
    console.log('帳號密碼空值');
    alert('請輸入帳號和姓名');
    return;
  } else if (!selectedMethod.value) {
    console.log('驗證方式未選');
    alert('請選擇驗證方式');
    return;
  }

  axios
    .post(`${import.meta.env.VITE_API_URL}/frontEnd/MemberForgetPassword/memberAccountCheck.php`, {
      account: inputInfos.value[0].value,
      name: inputInfos.value[1].value,
    })
    .then(res => {
      console.log(res.data);
      //如果有資料;
      if (res.data === '確認已有資料') {
        alert('已將驗證信件寄送至email');
        router.push('../../login');
      } else {
        console.log('無此帳號密碼');
        alert('此帳號尚未註冊');
      }
    });
  };
</script>

<style lang="scss" scoped>
.middle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .method {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    input[type='radio'] {
      margin: 0px 10px 0px 25px;
    }
  }
  label {
    font-size: 20px;
    .method {
      font-size: 16px;
    }
  }
  .user-input input {
    width: 300px;
    height: 60px;
    border-width: 1px;
    border-color: lightgray;
    border-radius: 10px;
    padding-left: 9px;

    margin-top: 40px;
    &::placeholder {
      font-size: 18px;
    }
  }
  .middle__form--Btn {
    background-color: #d1825b;
    display: block;
    margin: 0 auto;
    width: 160px;
    height: 60px;
    border-radius: 10px;
    margin-bottom: 50px;
    font-weight: 400;
    font-size: 24px;
    margin-top: 80px;
  }
  .btn {
    display: flex;
  }
  .routerlink {
    text-decoration-line: none;
    margin-right: 40px;
  }
}

span {
  display: flex;
  margin-left: 65px;
  margin-top: 10px;
  color: red;
  font-weight: bold;
}
</style>
