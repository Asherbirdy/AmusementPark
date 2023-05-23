<script setup></script>
<template>
  <div class="member">
    <div class="title">會員資料</div>
    <nav>
      <form>
        <section class="name">
          <label for="name">會員姓名：</label>
          <input class="inp_short" type="text" id="name" name="name" />
        </section>

        <section>
          <label for="birthdate">出生日期：</label>
          <input class="inp_short" type="date" id="birthdate" name="birthdate" />
        </section>

        <section>
          <label for="phone">手機號碼：</label>
          <input class="inp_short" type="tel" id="phone" name="phone" />
        </section>

        <section>
          <label for="email">電子郵件：</label>
          <input class="inp_long" type="email" id="email" name="email" />
        </section>

        <section>
          <label for="email">通訊地址：</label>
          <input class="inp_long" type="email" id="email" name="email" />
        </section>

        <section>
          <label for="password">密碼：</label>
          <router-link to="#">變更密碼</router-link>
        </section>
      </form>
      <div class="monstar">
        <MonsterDivo id="divo"/> 
      </div>  
     
    </nav>

    <section class="btn-wrap">
      <btn  class="btn" :style="{ width: '200px'}" button-text-color="white"  button-color="#D1825B">取消</btn>
      <btn class="btn" :style="{ width: '200px'}" button-text-color="white" button-color="#D1825B">儲存</btn>
    </section>
  </div>
</template>
<style scoped lang="scss">
.member {
  background-color: $maincolor1;
  width: 75%;
  font-size: 20px;
  margin-left: 40px;
  nav{
    margin: 40px;
    display: flex;
    justify-content: space-between;
    .monstar{
      // width: 400px;
      // height: 400px;
      background: #fff;
      border-radius: 5rem;
      // margin: 40px;
      #divo{
        width: 400px;
        height: 400px;
      }
    }
  }
  .title{
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #FFF;
    background-color: $maincolor3;
  }
  form{
    margin: auto 0;
    .name{
      margin-top: 40px;
    }
    section {
      margin-bottom: 5%;
    }
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

  label {
    font-size: 20px;
    font-family: $font-family;
    margin-right: 20px;
    margin-left: 20px;
  }

  select {
    font-size: 20px;
    width: 270px;
    height: 50px;
    border-radius: 10px;
    padding: 10px;
  }

  input {
    font-size: 20px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .inp_short {
    width: 200px;
    height: 40px;
    border-radius: 10px;
  }
  .inp_long {
    width: 300px;
    height: 40px;
    border-radius: 10px;
  }
}
</style>
