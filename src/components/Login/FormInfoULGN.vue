<script setup>
// 帳號 + 密碼 的 input欄位
const account = ''; // 用作v-model雙向數據綁定
const password = ''; // 用作v-model雙向數據綁定
const inputInfos = ref([
  {
    title: '帳號：',
    type: 'text',
    id: 'account',
    placeholder: '請輸入您的Email或手機',
    value: account,
  },
  {
    title: '密碼：',
    type: 'tel',
    id: 'password',
    placeholder: '請輸入您的密碼',
    value: password,
  },
]);
// 會員註冊 + 忘記密碼 的 a標籤
const aLinks = ref([
  {
    id: '1',
    url: '#',
    text: '會員註冊',
    icon: 'User',
  },
  {
    id: '2',
    url: '#',
    text: '忘記密碼',
    icon: 'Unlock',
  },
]);
</script>

<template>
  <section class="middle">
    <form action="middle__form">
      <!-- 帳號 + 密碼 的 input欄位 -->
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
        />
      </div>

      <!-- 會員註冊 + 忘記密碼 的 a標籤 -->
      <div class="middle__form--bigWrapOfIconA">
        <div
          class="middle__form--wrapOfIconA"
          v-for="(aLink, index) in aLinks"
          v-bind:key="aLink.id"
          v-bind:href="aLink.url"
        >
          <el-icon class="middle__form--Icon"><component :is="aLink.icon" /></el-icon>  <!-- 在 <el-icon> 组件内部動態渲染 aLink.icon 所代表的组件 -->
          <a class="middle__form--A">{{ aLink.text }}</a>
        </div>
      </div>

      <Button class="middle__form--Btn" type="submit" id="Submit">登入</Button>
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
    }
    &--Icon {
      margin-right: 9px;
    }
    &--A {
      font-weight: 400;
      font-size: 16px;
      line-height: 19.36px;
    }

    &--Btn {
      background-color: #D1825B;
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
</style>
