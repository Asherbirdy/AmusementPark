<script setup>
const account = ''; // 用作v-model雙向數據綁定
const gender = ''; // 用作v-model雙向數據綁定
const birthda = ''; // 用作v-model雙向數據綁定
const phone = ''; // 用作v-model雙向數據綁定
const email = ''; // 用作v-model雙向數據綁定
const password = ''; // 用作v-model雙向數據綁定
const repassword = ''; // 用作v-model雙向數據綁定

const inputInfos = ref([
  {
    title: '姓名：',
    type: 'text',
    id: 'account',
    placeholder: '請輸入您的姓名',
    value: account,
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
    id: 'birthda',
    placeholder: '請輸入您的出生日期',
    value: birthda,
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
    type: 'tel',
    id: 'password',
    placeholder: '請輸入您的密碼',
    value: password,
  },
  {
    title: '確認密碼：',
    type: 'tel',
    id: 'repassword',
    placeholder: '再次輸入您的密碼',
    value: repassword,
  },
]);
</script>

<template>
  <section class="middle">
    <form action="middle__form">
      <div
        class="middle__form--wrapOfLabelInput"
        v-for="(inputInfo, index) in inputInfos"
        :key="inputInfo.id"
      >
        <label class="middle__form--label">{{ inputInfo.title }}</label>
        <input
          v-if="
            inputInfo.type === 'text' ||
            inputInfo.type === 'tel' ||
            inputInfo.type === 'date'
          "
          class="middle__form--input"
          :type="inputInfo.type"
          :id="inputInfo.id"
          :placeholder="inputInfo.placeholder"
          v-model="inputInfo.value"
        />
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
      <Button class="middle__form--Btn" type="submit" id="Submit">確認</Button>
    </form>
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
</style>
