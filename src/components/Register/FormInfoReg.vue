<script setup>
import axios from 'axios';

//////input 欄位

const name = ref(''); // 用作v-model雙向數據綁定
const gender =  ref(''); // 用作v-model雙向數據綁定
const birthday =  ref(''); // 用作v-model雙向數據綁定
const phone =  ref(''); // 用作v-model雙向數據綁定
const pwd =  ref(''); // 用作v-model雙向數據綁定
const email =  ref(''); // 用作v-model雙向數據綁定
const rePassword =  ref(''); // 用作v-model雙向數據綁定

const inputInfos = ref([
  {
    title: '姓名：',
    type: 'text',
    id: 'name',
    placeholder: '請輸入您的姓名',
    value: name,
  },
  {
    title: '性別：',
    type: 'select',
    id: 'gender',
    placeholder: '請輸入您的性別',
    options: [
      { text: '請選擇性別', value: '', disabled: true },
      { text: '男', value: '男' },
      { text: '女', value: '女' },
      { text: '其他', value: '其他' },
    ],
    value: gender,
  },
  {
    title: '出生日期：',
    type: 'date',
    id: 'birthday',
    placeholder: '請輸入您的出生日期',
    value: birthday,
  },
  {
    title: '手機號碼：',
    type: 'text',
    id: 'phone',
    placeholder: '請輸入您的手機號碼',
    value: phone,
  },
  {
    title: '電子郵件：',
    type: 'text',
    id: 'email',
    placeholder: '請輸入您的電子郵件',
    value: email,
  },
  {
    title: '密碼：',
    type: 'password',
    id: 'password',
    placeholder: '請輸入您的密碼',
    value: pwd,
  },
  {
    title: '確認密碼：',
    type: 'password',
    id: 'rePassword',
    placeholder: '再次輸入您的密碼',
    value: rePassword,
  },
]);
//////會員註冊驗證格式

const emailRegex =
  /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const isEmailFail = ref(false);
const isPhoneFail = ref(false);
const isPwdFail = ref(false);
const blueCheck = inputType => {
  const inputPhone = inputInfos.value[3].value;
  const inputEmail = inputInfos.value[4].value;
  const inputPwd = inputInfos.value[5].value;
  const inputREPwd = inputInfos.value[6].value;
  if (
    inputPhone !== '' &&
    inputEmail !== '' &&
    inputPwd !== '' &&
    inputREPwd !== ''
  ) {
    const isEmail = emailRegex.test(inputEmail);
    if (isEmail === false) {
      console.log('驗證失敗');
    } else {
      console.log('驗證正確');
    }

    //電話驗證
    const isPhoneNumber =
      !isNaN(inputPhone) &&
      inputPhone.length === 10 &&
      inputPhone.trim().length > 0 &&
      inputPhone[0] === '0' &&
      inputPhone[1] === '9';
    if (inputPhone !== isPhoneNumber) {
      console.log('電話錯誤');
    } else {
      alert('電話正確');
    }

    //密碼驗證
    if (inputPwd === inputREPwd) {
      isPwdFail.value = false;
      console.log('正確');
    } else {
      isPwdFail.value = true;
      console.log('密碼請再次輸入');
    }

    isPhoneFail.value = !isPhoneNumber;
    isEmailFail.value = !isEmail;
  } else {
    console.log('沒東東');
  }
};

const router = useRouter();

//////資料送出
const handleSubmit = () => {
  console.log(typeof inputInfos.value);
  if (
    name.value !== '' &&
    gender.value !== '' &&
    birthday.value !== '' &&
    phone.value !== '' &&
    pwd.value !== '' &&
    email.value !== '' &&
    rePassword.value !== ''
  ) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/frontEnd/memberSignup/memberSignup.php`, {
        name: inputInfos.value[0].value,
        gender: inputInfos.value[1].value,
        birthday: inputInfos.value[2].value,
        phone: inputInfos.value[3].value,
        email: inputInfos.value[4].value,
        pwd: inputInfos.value[5].value,
      })
      .then(res => {
        console.log(res.data);
        if (res.data === '註冊成功') {
          alert('註冊成功');
          router.push('../../login');
        } else {
          alert('請重新輸入資料');
        }
      })
      .catch(err => {
        console.log(err);
        alert('伺服器問題');
      });
  } else {
    alert('請輸入完整資料');
    console.log(name, gender, birthday, phone, pwd, email, rePassword);
  }
};
</script>

<template>
  <section class="middle">
    <div class="middle__form">
      <!-- <form action="middle__form"> -->
      <div
        class="middle__form--wrapOfLabelInput"
        v-for="(inputInfo, index) in inputInfos"
        :key="inputInfo.id"
      >
        <label class="middle__form--label">{{ inputInfo.title }}</label>
        <input
          v-if="
            inputInfo.type === 'text' ||
            inputInfo.type === 'password' ||
            inputInfo.type === 'date'
          "
          class="middle__form--input"
          :type="inputInfo.type"
          :id="inputInfo.id"
          :placeholder="inputInfo.placeholder"
          v-model="inputInfo.value"
          @blur="blueCheck(inputInfo.id)"
        />
        <span v-if="isPhoneFail && inputInfo.id === 'phone'"
          >請輸入正確電話
        </span>
        <span v-if="isEmailFail && inputInfo.id === 'email'"
          >請輸入正確Email
        </span>
        <span v-if="isPwdFail && inputInfo.id === 'rePassword'"
          >您再次輸入的密碼有誤
        </span>
        <select
          v-else-if="inputInfo.type === 'select'"
          class="middle__form--select"
          :id="inputInfo.id"
          v-model="inputInfo.value"
        >
          <option
            v-for="(option, optionIndex) in inputInfo.options"
            :key="optionIndex"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <Button
        class="middle__form--Btn"
        type="submit"
        id="Submit"
        @click="handleSubmit"
        >立即註冊</Button
      >
    </div>
    <!-- </form> -->
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
      min-width: 100px;
      display: inline-block;
      font-weight: bold;
      font-size: 16px;
      margin-right: 19px;
    }
    &--input {
      font-size: 20px;
      width: 300px;
      height: 60px;
      border-width: 1px;
      border-color: lightgray;
      border-radius: 10px;
      padding-left: 9px;
    }
    &--select {
      font-size: 20px;
      width: 311px;
      height: 67px;
      border-width: 1px;
      border-radius: 10px;
      padding-left: 9px;
    }
    &--input::placeholder {
      font-size: 16px;
      line-height: 19px;
      color: #838383;
    }
    &--Btn {
      background-color: #d1825b;
      display: block;
      margin: 0 auto;
      width: 300px;
      height: 60px;
      border-radius: 10px;
      margin-bottom: 50px;
      font-weight: bold;
      font-size: 24px;
      color: #fff;
    }
  }
}
span {
  display: flex;
  margin-left: 125px;
  margin-top: 10px;
  color: red;
  font-weight: bold;
}
</style>
