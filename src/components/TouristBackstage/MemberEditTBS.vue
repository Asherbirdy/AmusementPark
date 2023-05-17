<script setup></script>
<template>
  <div class="form">
    <tour-title width="300" class="title">編輯會員資料</tour-title>
    <form>
      <section>
        <label for="name">我的姓名:</label>
        <input class="inp_short" type="text" id="name" name="name" /><br />
      </section>
      <section>
        <label for="birthdate">出生日期:</label>
        <input class="inp_short" type="date" id="birthdate" name="birthdate" />

        <label for="gender">性別:</label>
        <select id="gender" name="gender">
          <option value="male">男性</option>
          <option value="female">女性</option>
          <option value="other">其他</option>
        </select>
      </section>
      <section>
        <label for="email">電子郵件:</label>
        <input class="inp_long" type="email" id="email" name="email" />
      </section>
      <section>
        <label for="phone">手機號碼:</label>
        <input class="inp_long" type="tel" id="phone" name="phone" />
      </section>
      <section>
        <label for="password">密碼:</label>
        <router-link to="#">變更密碼</router-link>
      </section>
      <section class="btn-wrap">
        <button class="btn" button-text-color="white" button-color="#D1825B"
          >確認</button
        >

        <button
          class="btn"
          width="150"
          button-text-color="white"
          button-color="#D1825B"
          >取消</button
        >
      </section>
    </form>
  </div>
</template>
<style scoped lang="scss">
input[type='date']::-webkit-datetime-edit {
  /* 這裡設置字體大小為 20px */
  font-size: 24px;
}

.form {
  // border:1px solid black;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  a {
    text-decoration: none;
    color: #34a1fc;
    font-size: 20px;
  }

  .title {
    margin-bottom: 5%;
  }

  section {
    margin-bottom: 5%;
  }

  .btn-wrap {
    margin: 0 auto;
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn {
      width: 150px;
      height: 70px;
      font-size: 20px;
      border-radius: 10px;
    }
  }

  label {
    font-size: 20px;
    font-family: $font-family;
    margin-right: 20px;
    margin-left: 20px;
  }

  select {
    font-size: 20px;
    width: 270px;
    height: 77px;
    border-radius: 10px;
    padding: 10px;
  }

  input {
    font-size: 24px;
    padding: 10px;
    box-sizing: border-box;
  }
  .inp_short {
    width: 270px;
    height: 77px;
    border-radius: 10px;
  }
  .inp_long {
    width: 652px;
    height: 77px;
    border-radius: 10px;
  }
}
</style>
