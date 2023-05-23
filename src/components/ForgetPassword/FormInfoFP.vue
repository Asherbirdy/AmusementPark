<template>
  <section class="middle">
    <form action="">
      <div class="method">
        <label>認證方式：</label>
        <input type="radio" />
        <p>E-mail</p>
        <input type="radio" />
        <p>手機號碼</p>
      </div>
      <div v-for="(item, index) in passInf" :key="item.id" class="user-input">
        <label>{{ item.title }}</label>
        <input
          :type="item.type"
          :id="index"
          v-model="item.value"
          :placeholder="item.placeholder"
        />
      </div>
<<<<<<< HEAD
      <router-link to="/" class="routerlink">
=======
>>>>>>> 43cc52d52b5d8e2d890148f4dd6d842a8d329189
      <div class="btn">
        <Button
          class="middle__form--Btn"
          type="submit"
          id="Submit"
        >
          取消
        </Button>
        
        <Button
          class="middle__form--Btn"
          type="submit"
          id="Submit"
        >
          確認送出
        </Button>
      </div>
<<<<<<< HEAD
      </router-link>
=======
>>>>>>> 43cc52d52b5d8e2d890148f4dd6d842a8d329189
    </form>
  </section>
</template>

<script setup>
const email = '';
const name = '';

const passInf = ref([
  {
    title: '帳號：',
    type: 'text',
    id: 'email',
    value: email,
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
</script>

<style lang="scss" scoped>
.middle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .method {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin: 0 30px 0 0;
    }
  }
  label {
    font-size: 20px;
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
  .btn{
    display: flex;
  }
<<<<<<< HEAD
  .routerlink {
    text-decoration-line: none;
}
=======
>>>>>>> 43cc52d52b5d8e2d890148f4dd6d842a8d329189
}
</style>
