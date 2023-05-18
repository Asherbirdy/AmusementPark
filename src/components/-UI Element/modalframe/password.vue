<template>
    <ModalM class="ml">
      <h1>變更密碼</h1>
      <ul>
        <li v-for="item in inputs" :key="item.id" class="password">
            <h3>{{ item.title }}</h3>
            <br />
            <input type="text" :placeholder="item.placeholder" v-model="item.value" />
        </li>
      </ul>
      <button id="btn">確認</button>
    </ModalM>
  </template>
  
  <script setup>  
  const inputs = ref([
    { id: 'oldpassword', title: '舊密碼：', placeholder: '請輸入您的舊密碼', value: '' },
    { id: 'newpassword', title: '新密碼：', placeholder: '請輸入您的新密碼', value: '' },
    { id: 'checkpassword', title: '確認新密碼：', placeholder: '請再次輸入您的新密碼', value: '' },
  ]);
  </script>
<style scoped lang="scss">
.ml h1 {
  font-size: 25px;
  margin: 0 200px;
  color: #90420a;
}
.password{
    line-height: 0;
}
ul {
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin: 75px 40px;
  color: #90420a;
}
input {
  font-size: 30px;
  color: #90420a;
  border-radius: 10px;
  margin: 20px auto;
  width: 400px;
  height: 50px;
  padding-left: 20px;
}
::-webkit-input-placeholder {
  font-size: 16px;
  line-height: 19px;
}
#btn {
  margin: 7px 175px;
  width: 154px;
  border-radius: 10px;
}
</style>
