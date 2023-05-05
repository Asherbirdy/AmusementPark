<template lang="">
  <div class="user">
    <h2>訂購人資料</h2>
    <form>
      <label for="name">姓名：</label>
      <br />
      <input
        type="text"
        id="name"
        v-model="Name"
        placeholder="請輸入您的姓名"
      />
      <br />

      <label for="phone-number">手機號碼：</label>
      <br />
      <input
        type="tel"
        id="phone-number"
        v-model="phoneNumber"
        placeholder="請輸入您的手機號碼"
      />
      <br />

      <label for="email">電子郵件：</label>
      <br />
      <input
        type="text"
        id="email"
        v-model="Email"
        placeholder="請輸入您的電子郵件"
      />
      <br />

      <label for="address">寄送地址：</label>
      <br />
      <input
        type="text"
        id="address"
        v-model="Address"
        placeholder="請輸入您的地址"
      />
      <br />

      <label for="comment">訂單備註：</label>
      <br />
      <textarea
        id="comment"
        v-model="Comment"
        cols="20"
        rows="7"
        placeholder="請填寫您的訂單備註*"
        resize="none"
      ></textarea>
      <br />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Name: '',
      phoneNumber: '',
      Email: '',
      Address: '',
      Comment: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.user {
  width: 550px;
  // height: 650px;
  background-color: #f9f3e4;
  margin: 0 auto;
  margin-top: 100px;
}

h2 {
  color: #f9f3e4;
  background-color: #d1825b;
  text-align: center;
  line-height: 70px;
  height: 70px;
}

label {
  font-size: 16px;
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 40px 50px;
}

input {
    padding: 10px;
    border: 2px solid #000000;
    border-radius: 10px;
  }
  
  textarea {
    resize: none;
    
    padding: 10px;
    border: 2px solid #000000;
    border-radius: 10px;
}

</style>
