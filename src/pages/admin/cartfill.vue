<template lang="">
  <article>
    <div class="CartStep">
      <div class="monster">
        <monster-cartfill>3</monster-cartfill>
        <h3>購物車</h3>
      </div>
      <hr width="100" style="border: 2px dashed #d1825b" />
      <div class="monster">
        <monsterBlue />
        <h3>填寫資料</h3>
      </div>
      <hr width="100" style="border: 2px dashed #d1825b" />
      <div class="monster">
        <monsterWhite />
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
        <label for="comment">訂單備註：</label>
        <textarea
          id="comment"
          v-model="comment"
          cols="20"
          rows="7"
          placeholder="請填寫您的訂單備註*"
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
</template>

<script setup>
const name = '';
const phoneNumber = '';
const email = '';
const address = '';

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
    title: '電子郵件：',
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
h2 {
  color: #f9f3e4;
  background-color: #d1825b;
  text-align: center;
  line-height: 70px;
  height: 70px;
}
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
      svg{
        margin-bottom: 20px;
      }
      h3{
        color: #163767;
      }
    }
  }
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
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 40px 50px;
    #pay-method {
      margin-bottom: 30px;
    }
    .user-input-row {
      display: flex;
      flex-direction: column;
      // margin-bottom: 20px;
      color: #90420a;
    }
    input {
      margin-bottom: 23px;
    }
  }
}

.user {
  width: 550px;
  height: 650px;
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
    #comment {
      resize: none;
      padding: 10px;
      border: 2px solid #000000;
      border-radius: 10px;
    }
  }
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
</style>
