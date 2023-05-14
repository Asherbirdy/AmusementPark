<template lang="">
  <article>
    <div class="CartStep">
      <div class="monster">
        <monster-cart-Fill-White>1</monster-cart-Fill-White>
        <h3>購物車</h3>
      </div>
      <hr width="100" style="border: 3px dashed $textcolor5" />
      <div class="monster">
        <monsterCartFillBlue>2</monsterCartFillBlue>
        <h3>填寫資料</h3>
      </div>
      <hr width="100" style="border: 3px dashed #ffffff" />
      <div class="monster">
        <monster-cart-Fill-White>3</monster-cart-Fill-White>
        <h3>訂購完成</h3>
      </div>
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
            :id="index"
            v-model="item.value"
            :placeholder="item.placeholder"
          />
        </div>
        <label class="checkbox">
          <input type="checkbox" name="same_as_member" id="same_as_member" />
          <span> 同會員資料 </span>
        </label>
        <label for="address">寄送地址：</label>
        <input
          type="text"
          id="address"
          v-model="address"
          placeholder="請輸入您的地址*"
        />
        <label for="comment">訂單備註：</label>
        <textarea
          id="comment"
          v-model="comment"
          cols="20"
          rows="5"
          placeholder="請填寫您的訂單備註"
          resize="none"
        ></textarea>
      </form>
    </div>

    <div class="pay">
      <h2>付款方式</h2>
      <form>
        <label for="pay-method">付款方式：</label>
        <select id="pay-method" v-model="payMethod">
          <option value="" disabled selected>請選擇付款方式</option>
          <option
            v-for="(option, index) in payOption"
            :value="option.value"
            :key="index"
            placeholder="請選擇付款方式"
          >
            {{ option.label }}
          </option>
        </select>

        <label for="payData">付款資料：</label>
        <div
          v-for="(item, index) in payInput"
          :key="index"
          class="user-input-row"
        >
          <!-- <label for="item.id">{{ item.label }}</label> -->
          <input
            :type="item.type"
            :id="item.id"
            v-model="item.value"
            :placeholder="item.placeholder"
          />
        </div>
        <button type="submit" id="Submit">提交訂單</button>
      </form>
    </div>
  </main>
  <vue-fb-customer-chat />
</template>

<script setup>
const name = '';
const phoneNumber = '';
const email = '';

const orderInfo = ref([
  {
    title: '姓名：',
    type: 'text',
    id: 'name',
    value: name,
    placeholder: '請輸入您的姓名*',
  },
  {
    title: '手機號碼：',
    type: 'tel',
    id: 'phone-number',
    value: phoneNumber,
    placeholder: '請輸入您的手機號碼*',
  },
  {
    title: '電子郵件：',
    type: 'text',
    id: 'email',
    value: email,
    placeholder: '請輸入您的電子郵件*',
  },
]);

const commentLabel = ref([]);

// let payMethod = '';
let cardNumber = '';
let cardName = '';
let date = '';
let code = '';

const payOption = ref([
  { label: '信用卡(支援國內外Visa,Master)', value: 'credit-card' },
  { label: 'Line Pay', value: 'line-pay' },
  { label: 'Apple Pay', value: 'apple-pay' },
]);

const payMethod = ref('credit-card'); // 設定預設值

const payInput = ref([
  {
    label: '卡號',
    type: 'text',
    id: 'card-number',
    value: cardNumber,
    placeholder: '卡號',
  },
  {
    label: '持卡人姓名',
    type: 'text',
    id: 'name',
    value: cardName,
    placeholder: '持卡人姓名',
  },
  {
    label: '有效期(MM/YY)',
    type: 'text',
    id: 'date',
    value: date,
    placeholder: '有效期(MM/YY)',
  },
  {
    label: '安全碼',
    type: 'password',
    id: 'code',
    value: code,
    placeholder: '安全碼',
  },
]);
</script>

<style lang="scss" scoped>
//共同樣式
main {
  display: flex;
  justify-content: center;
  margin-bottom: 200px;
  padding: 0;
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

input {
  padding: 10px;
  border: 2px solid #000000;
  border-radius: 10px;
}

//購物車步驟
article {
  display: flex;
  justify-content: space-evenly;
  margin-top: 150px;
  .CartStep {
    display: flex;
    align-items: center;
    .monster {
      display: flex;
      flex-direction: column;
      align-items: center;
      h3 {
        margin-top: 20px;
        color: #163767;
      }
    }
    .hrNone {
      color: white;
    }
    
  }
}
//付款方式
.pay {
  width: 550px;
  background-color: #f9f3e4;
  margin: 15px;
  margin-top: 100px;
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 40px 50px;
    .pay-label {
      margin: 30px 0 5px 0;
    }
    #pay-method {
      margin-bottom: 50px;
    }
    .user-input-row {
      display: flex;
      flex-direction: column;
      color: #90420a;
    }
    select {
      padding: 10px;
      border: 2px solid #000000;
      border-radius: 10px;
    }

    input {
      margin-bottom: 23px;
    }
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
}

//訂購人資料
.user {
  width: 550px;
  background-color: #f9f3e4;
  margin: 15px;
  margin-top: 100px;
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 40px 50px;
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
    .checkbox {
      padding-left: 10px;
      margin-bottom: 20px;
      cursor: pointer;
    }
    input[type='checkbox'] {
      display: none;
    }
    input[type='checkbox'] + span {
      display: inline-block;
      padding-left: 26px;
      line-height: 20px;
      background: url(https://i.imgur.com/bZM5Itd.png) no-repeat left top;
      user-select: none;
    }
    input[type='checkbox']:checked + span {
      background: url(https://i.imgur.com/JWm4WKA.png) no-repeat left top;
    }
    #address {
      margin-bottom: 20px;
    }
    #comment {
      resize: none;
      padding: 10px;
      border: 2px solid #000000;
      border-radius: 10px;
    }
  }
}
</style>
