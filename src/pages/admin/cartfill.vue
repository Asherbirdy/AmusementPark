<template lang="">

  <article>
    <div class="CartStep">
      <SvgMonsterFrame />
      <div class="test"></div>
      <SvgMonsterFrame />
      <div class="test"></div>
      <SvgMonsterFrame />
    </div>
  </article>
  <main>
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

    <div class="pay">
      <h2>付款方式：</h2>
      <form>
        <label for="pay-method">付款方式：</label>
        <br />
        <select id="pay-method" v-model="PayMethod">
          <option value="credit-card">信用卡(支援國內外Visa,Master)</option>
          <option value="line-pay">Line Pay</option>
          <option value="apple-pay">Apple Pay</option>
        </select>
        <br />

        <label for="address" class="pay-label">付款資料：</label>
        <input
          type="text"
          id="card-number"
          v-model="CardNumber"
          placeholder="卡號"
        />

        <input type="text" id="name" v-model="Name" placeholder="持卡人姓名" />

        <input
          type="month"
          id="date"
          v-model="Date"
          placeholder="有效期(MM/YY)"
        />

        <input type="password" id="code" v-model="Code" placeholder="安全碼" />

        <button type="submit" id="Submit">提交訂單</button>
      </form>
    </div>
  </main>
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
      PayMethod: 'credit-card',
      CardNumber: '',
      Date: '',
      Code: '',
      PayMethod: 'credit-card',
    };
  },
};
</script>
<style lang="scss" scoped>

article{
  display: flex;
  justify-content: space-evenly;
  margin-top: 200px;
}
.CartStep{
  display: flex;
  align-items: center;
}

.test{
  border-bottom:2px dashed #D1825B;
  width: 100px;
}

main {
  display: flex;
  justify-content: center;
}

.pay {
  width: 550px;
  height: 650px;
  background-color: #f9f3e4;
  margin: 15px;
  margin-top: 100px;
  background-image: url(../../../src/components/-UI\ Element/svg/Vector.svg);
}

.user {
  width: 550px;
  height: 650px;
  background-color: #f9f3e4;
  margin: 15px;
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
  color: #90420a;
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

select {
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

#Submit {
  width: 170px;
  height: 55px;
  color: #f9f3e4;
  background-color: #d1825b;
  border: none;
  border-radius: 10px;

  margin: 30px auto;
}
.pay-label {
  margin: 30px 0 5px 0;
}

.pay input {
  margin-bottom: 23px;
}

</style>
