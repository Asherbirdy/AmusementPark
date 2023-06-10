<template lang="">
  <!--購物車步驟-->
  <!-- 哈囉 -->
  <!-- <article>
    <div class="CartStep">
      <div class="monster">
        <monster-cart-Fill-White>1</monster-cart-Fill-White>
        <h3>購物車</h3>
      </div>
      <hr width="100" style="border: 3px dashed #d1825b" />
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
  </article> -->
  <!--訂購人資料-->
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
        <label class="checkbox">
          <input type="checkbox" name="same_as_member" id="same_as_member" />
          <span> 儲存為預設地址 </span>
        </label>
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
    <!--付款方式-->
    <div class="pay">
      <h2>付款</h2>
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
          <input
            :type="item.type"
            :id="item.id"
            v-model="item.value"
            :placeholder="item.placeholder"
          />
        </div>
        <label class="checkbox">
          <input type="checkbox" name="same_as_member" id="same_as_member" />
          <span> 儲存信用卡資訊 </span>
        </label>
      </form>
      <button class = "submit" type="submit" id="Submit" @click= "handSubmit" >送出訂單</button>  
    </div>
  </main>
</template>

<script setup>
import axios from 'axios';
const router = useRouter();

//FB帳號 id
window.fbAsyncInit = function () {
  FB.init({
    appId: '105529122534808',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v16.0',
  });
};

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

// let payMethod = '';
let cardNumber = '4699 1299 8337 1111';
let cardName = 'YO XUAN CHEN';
let date = '0629';
let code = '633';

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
//fb-message sdk串接
onMounted(() => {
  window.fbAsyncInit = function () {
    FB.init({
      xfbml: true,
      version: 'v11.0',
    });
  };
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
});

// 送出訂單
const handSubmit = () => {
  axios
    .post('/PDO/frontEnd/cart/submitOrder.php')
    .then(res => {
      alert('訂單已送出');
      router.push('/admin/cartsuccess');
    })
    .catch(err => {
      alert('訂單送出失敗');
    });
};
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
  display: flex;
  flex-direction: column;
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
    width: 450px;
    height: 55px;
    color: #f9f3e4;
    background-color: #d1825b;
    border: none;
    border-radius: 10px;

    margin: 30px auto;
    margin-top: 10px;
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
