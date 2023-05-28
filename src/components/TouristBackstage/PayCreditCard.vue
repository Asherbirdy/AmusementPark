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
              v-next-input="
                index < cardNumberInputs.length - 1
                  ? $refs[`cardInput${index + 1}`]
                  : null
              "
              @input="handleCardInput(index)"
              @keydown.backspace="handleCardBackspace(index)"
              @keypress="handleCardKeyPress"
              :ref="`cardInput${index}`"
            />
            <!-- v-next-input 可以自動跳下一格 cardNumberInputs.length - 1是否為最後一格
            如果條件為假，也就是當前輸入框是最後一個輸入框，那麼執行結果為 null
             "-"只會出現在index小於cardNumberInputs.length-1之間，因為有4個，但是"-"只會出現在4組號碼中間。
            handleCardBackspace 事件監聽按下退格鍵觸發該事件。handleCardKeyPress檢查使用者輸入的按鍵值，
            並確定該按鍵是否為有效的卡號輸入-->
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
            :ref="`expirationInput`"
            :placeholder="'MM/YY'"
            type="text"
            maxlength="5"
            class="card expiration-input"
            pattern="(0[1-9]|1[0-2])/(2[2-9]|[3-9][0-9])"
            required
            v-next-input="$refs.securityCodeInput"
            @input="handleExpirationInput"
            @keydown.backspace="handleExpirationBackspace"
            @keypress="handleExpirationKeyPress"
          />
          <!--pattern限制使用者在輸入框中輸入的值必須符合指定的模式 [0-9]只能0~9 {4}為數字長度 
          required用於指定輸入框是否為必填項目
          handleExpirationInput 事件監聽器，監聽日期輸入完2碼後加"/"並將焦點跳轉到下一個輸入框。
          是在安全碼輸入框中使用 $refs.securityCodeInput 作為儲存點，以便在特定條件下跳到下一個輸入框。
          -->
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
            @keypress="handleSecurityCodeKeyPress"
          />
        </section>
      </form>
      <section class="connect">
        <h1>連接LINEPAY</h1>
        <h1>連接APPLEPAY</h1>
      </section>
    </nav>

    <section class="btn-wrap">
      <btn
        class="btn"
        :style="{ width: '200px' }"
        button-text-color="white"
        button-color="#D1825B"
        >取消</btn
      >
      <btn
        class="btn"
        :style="{ width: '200px' }"
        button-text-color="white"
        button-color="#D1825B"
        >儲存</btn
      >
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

const expiration = ref(''); //預設值為空字串
const securityCode = ref('');

// 信用卡號輸入
const handleCardInput = index => {
  const input = cardNumberInputs[index];
  // index進入陣列取值執行迴圈
  if (
    input.value.length === input.maxLength &&
    index < cardNumberInputs.length - 1
  ) {
    const nextInput = document.querySelector(
      `.card.${cardNumberInputs[index + 1].className}`
      // 打完一組卡號找下一個輸入框
    );
    if (nextInput) {
      nextInput.focus();
    }
  }
};
// 信用卡號退格鍵
const handleCardBackspace = index => {
  const input = cardNumberInputs[index];
  // index進入陣列取值執行迴圈
  if (input.value.length === 0 && index > 0) {
    const previousInput = document.querySelector(
      `.card.${cardNumberInputs[index - 1].className}`
      // 退格完一組卡號找上一個輸入框
    );
    if (previousInput) {
      previousInput.focus();
    }
  }
};

const handleCardKeyPress = event => {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);
  const isValidKey = /^[0-9]+$/.test(keyValue);
  // 防止輸入非數字
  if (!isValidKey) {
    event.preventDefault();
    alert('請輸入正確卡號');
  }
};
// 信用有效期
const handleExpirationInput = () => {
  if (expiration.value.length === 2) {
// 信用有效期寫完2格自動加"/"
    expiration.value += '/';
    const expirationInput = document.querySelector('.expiration-input');
    if (expirationInput) {
      expirationInput.focus();
    }
  }
};
// 信用有效期退格鍵
const handleExpirationBackspace = () => {
  if (expiration.value.length === 3 && expiration.value[2] === '/') {
    // 陣列 0、1、2，固定2寫"/"
    expiration.value = expiration.value.slice(0, 2);
  }
};
// 信用安全碼
const handleSecurityCodeKeyPress = event => {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);
  const isValidKey = /^[0-9]+$/.test(keyValue);
  if (!isValidKey) {
    event.preventDefault();
    alert('請輸入正確安全碼');
  }
};
// 信用安全碼退格鍵
const handleExpirationKeyPress = event => {
  const keyCode = event.keyCode || event.which;
  const keyValue = String.fromCharCode(keyCode);
  const isValidKey = /^[0-9]+$/.test(keyValue);
  if (!isValidKey) {
    event.preventDefault();
    alert('請輸入正確有效期');
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
input.card {
  width: 55px;
}
.connect h1{
  font-size: 26px;
  color: #9c3401;
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
</style>
