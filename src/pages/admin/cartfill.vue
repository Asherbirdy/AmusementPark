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
        <div
          v-for="(item, index) in orderInfo"
          :key="item.id"
          class="user-input-row"
        >
          <label>{{ item.title }}</label>
          <input
            :type="item.type"
            :id="item.id"
            v-model="item.value"
            :placeholder="item.placeholder"
          />
        </div>
        <label for="comment">訂單備註：</label>
        <textarea
          id="comment"
          v-model="comment"
          cols="20"
          rows="7"
          placeholder="請填寫您的訂單備註*"
          resize="none"
        >
        </textarea>
      </form>
    </div>

    <div class="pay">
      <h2>付款方式</h2>
      <form>
        <label for="pay-method">付款方式：</label>
        <select id="pay-method" v-model="payMethod">
          <option
            v-for="(option, index) in payOption"
            :value="option.value"
            :key="index"
          >
            {{ option.label }}
          </option>
        </select>

        
      </form>
    </div>

    <!-- <option value="credit-card">信用卡(支援國內外Visa,Master)</option>
          <option value="line-pay">Line Pay</option>
          <option value="apple-pay">Apple Pay</option>
        </select>
        <br />
        <label for="address" class="pay-label">付款資料：</label>
        <input
          type="tet"
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
      </form> -->
    <!-- </div> -->
  </main>
</template>

<script setup>
const name = '';
const phoneNumber = '';
const email = '';
const address = '';
const comment = '';

const orderInfo = ref([
  {
    title: '姓名：',
    type: 'text',
    id: 'name',
    value: name,
    placeholder: '請輸入您的姓名',
  },
  {
    title: '手機號碼：',
    type: 'tel',
    id: 'phone-number',
    value: phoneNumber,
    placeholder: '請輸入您的手機號碼',
  },
  {
    title: '電子郵件',
    type: 'text',
    id: 'email',
    value: email,
    placeholder: '請輸入您的電子郵件',
  },
  {
    title: '寄送地址：',
    type: 'text',
    id: 'address',
    value: address,
    placeholder: '請輸入您的地址',
  },
]);
const Comment = ref([comment]);

let payMethod = '';
</script>
<style lang="scss" scoped>
article {
  display: flex;
  justify-content: space-evenly;
  margin-top: 200px;
}
.CartStep {
  display: flex;
  align-items: center;
}

.test {
  border-bottom: 2px dashed #d1825b;
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
}

.user {
  width: 550px;
  height: 650px;
  background-color: #f9f3e4;
  margin: 15px;
  margin-top: 100px;
  .user-input-row {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
    color: #90420a;
    label {
      margin-bottom: 10px;
    }
    // input {
    //   width: -webkit-fill-available;
    // }
  }
  #comment {
    resize: none;
    padding: 10px;
    border: 2px solid #000000;
    border-radius: 10px;
  }
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
  margin-bottom: 10px;
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
