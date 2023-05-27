<template>
  <!-- 付款方式 -->
  <div class="pay">
    <h2>付款資訊</h2>
    <nav>
      <form>
        <section>
          <label for="phone">卡號：</label>
          <template v-for="(input, index) in cardNumberInputs" :key="index">
            <input
              v-model="input.value"
              :placeholder="'XXXX'"
              type="text"
              :class="`card ${input.className}`"
              :maxlength="input.maxLength"
              :pattern="input.pattern"
              required
              v-next-input="index < cardNumberInputs.length - 1 ? $refs[`cardInput${index + 1}`] : null"
              @input="handleCardInput(index)"
              @keydown.backspace="handleCardBackspace(index)"
              :ref="`cardInput${index}`"
            />
            <!-- v-next-input 可以自動跳下一格 -->
            <span v-if="index < cardNumberInputs.length - 1">-</span>
          </template>
        </section>

        <section class="name">
          <label for="name">持卡人姓名：</label>
          <input class="inp_short" type="text" id="name" name="name" /><br />
        </section>

        <section>
          <label for="date">有效期：</label>
          <input
            v-model="expiration"
            :placeholder="'MM/YY'"
            type="text"
            maxlength="5"
            class="card"
            pattern="(0[1-9]|1[0-2])/(2[2-9]|[3-9][0-9])"
            required
            v-next-input="$refs.securityCodeInput"
            @input="handleExpirationInput"
            @keydown.backspace="handleExpirationBackspace"
            ref="expirationInput"
          />
        </section>

        <section>
          <label for="password">安全碼：</label>
          <input
            v-model="securityCode"
            :placeholder="'XXX'"
            type="text"
            maxlength="3"
            class="card"
            pattern="[0-9]{3}"
            required
            ref="securityCodeInput"
          />
        </section>
      </form>
    </nav>

    <section class="btn-wrap">
      <btn
        class="btn"
        :style="{ width: '200px' }"
        button-text-color="white"
        button-color="#D1825B"
      >取消</btn>
      <btn
        class="btn"
        :style="{ width: '200px' }"
        button-text-color="white"
        button-color="#D1825B"
      >儲存</btn>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const cardNumberInputs = [
  { value: '', className: 'input1', maxLength: 4, pattern: '[0-9]{4}' },
  { value: '', className: 'input2', maxLength: 4, pattern: '[0-9]{4}' },
  { value: '', className: 'input3', maxLength: 4, pattern: '[0-9]{4}' },
  { value: '', className: 'input4', maxLength: 4, pattern: '[0-9]{4}' },
];

const expiration = ref('');
const securityCode = ref('');

const handleCardInput = (index) => {
  const input = cardNumberInputs[index];
  if (input.value.length === input.maxLength && index < cardNumberInputs.length - 1) {
    const nextInput = document.querySelector(`.card.${cardNumberInputs[index + 1].className}`);
    if (nextInput) {
      nextInput.focus();
    }
  }
};

const handleCardBackspace = (index) => {
  const input = cardNumberInputs[index];
  if (input.value.length === 0 && index > 0) {
    const previousInput = document.querySelector(`.card.${cardNumberInputs[index - 1].className}`);
    if (previousInput) {
      previousInput.focus();
    }
  }
};

const handleExpirationInput = () => {
  if (expiration.value.length === 5) {
    const securityCodeInput = document.querySelector('.card.securityCode');
    if (securityCodeInput) {
      securityCodeInput.focus();
    }
  }
};

const handleExpirationBackspace = () => {
  if (expiration.value.length === 3 && expiration.value[2] === '/') {
    expiration.value = expiration.value.slice(0, 2);
  }
};

onMounted(() => {
  const firstInput = document.querySelector('.card.input1');
  if (firstInput) {
    firstInput.focus();
  }
});
</script>


<style lang="scss" scoped>
/* 样式省略，保持原样 */
</style>


<style lang="scss" scoped>
input.card {
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
  font-size: 16px;
  padding: 10px;
  border: 2px solid #000000;
  border-radius: 10px;
}

//付款方式
.pay {
  width: 75%;
  background-color: #f9f3e4;
  margin-left: 40px;
  nav {
    margin: 40px;
    display: flex;
    justify-content: space-between;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 40px 50px;
    section {
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
