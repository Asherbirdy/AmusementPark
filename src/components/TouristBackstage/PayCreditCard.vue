<template lang="">
  <!--付款方式-->
    <div class="pay">
      <h2>付款資訊</h2>
      <nav>
        <form>
          <section>
            <label for="phone">卡號：</label>
            <input type="text" class="card" maxlength="4"> -
            <input type="text" class="card" maxlength="4"> -
            <input type="text" class="card" maxlength="4"> -
            <input type="text" class="card" maxlength="4">
          </section>

          <section class="name">
            <label for="name">持卡人姓名：</label>
            <input class="inp_short" type="text" id="name" name="name" /><br />
          </section>   

          <section>
            <label for="date">有效期：</label>
            <input type="text" class="card" maxlength="4">
          </section>

          <section>
            <label for="password">安全碼：：</label>
            <input type="text" class="card" maxlength="3">
          </section>
        </form>
        <form>
          <section>
            <label for="phone">連結APPLE PAY</label>
            <label for="phone">連結Line PAY</label>
          </section>
        </form>
      </nav>
      <!-- <form>
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
      </form> -->

    <section class="btn-wrap">
      <btn  class="btn" :style="{ width: '200px'}" button-text-color="white"  button-color="#D1825B">取消</btn>
      <btn class="btn" :style="{ width: '200px'}" button-text-color="white" button-color="#D1825B">儲存</btn>
    </section>
      
    </div>

</template>

<script setup>
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
</script>

<style lang="scss" scoped>
input.card{
  width: 42px;
}
.btn-wrap {
  margin: 0 auto;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 40px;  
  .btn {
    // width: 150px;
    height: 55px;
    font-size: 20px;
    // border-radius: 10px;
  }
}


h2 {
  color: #f9f3e4;
  background-color: #d1825b;
  text-align: center;
  line-height: 70px;
  height: 70px;
}

input {
  padding: 10px;
  border: 2px solid #000000;
  border-radius: 10px;
}

//付款方式
.pay {
  width: 75%;
  background-color: #f9f3e4;
  margin-left: 40px;
  nav{
    margin: 40px;
    display: flex;
    justify-content: space-between;}
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 40px 50px;
    section{
      label {
        display: block;
        width: 200px;
        font-size: 20px;
        font-weight: bold;
        color: #90420a;
        margin-bottom: 10px;
      }  
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
