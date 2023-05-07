<script setup></script>

<template>
  <div class="container">
    <button>X</button>
    <h1>會員登入</h1>
    <form action="">
      <div class="form-group">
        <label for="username">帳號：</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div class="form-group">
        <label for="password">密碼：</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div class="form-group">
        <button type="submit">登入</button>
      </div>
    </form>
    <div class="links">
      <a href="#">會員註冊</a>
      <a href="#">忘記密碼</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 450px;
  margin: 0 auto;
  padding: 20px 100px;
  box-sizing: border-box;
  border: 1px solid black;

  button {
    float: right;
  }

  h1 {
  text-align: center;
  margin-top: 0;
  color: red;
  }


}



form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #f7f7f7;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

button[type='submit'] {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type='submit']:hover {
  background-color: #0069d9;
}

.links {
  text-align: center;
  margin-top: 20px;
}

.links a {
  display: inline-block;
  margin-right: 10px;
  color: #007bff;
  text-decoration: none;
}

.links a:last-child {
  margin-right: 0;
}
</style>
