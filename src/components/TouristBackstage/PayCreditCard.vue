<template lang="">
  <!--付款方式-->
    <div class="pay">
      <h3>付款資訊</h3>
      <nav>
        <form>
          <section>
            <label for="phone">卡號：</label>
            <!-- <input type="text" class="card" maxlength="4"> -
            <input type="text" class="card" maxlength="4"> -
            <input type="text" class="card" maxlength="4"> -
            <input type="text" class="card" maxlength="4"> -->
          </section>

          <section class="name">
            <label for="name">持卡人姓名：</label>
            <!-- <input class="inp_short" type="text" id="name" name="name" /><br /> -->
          </section>   

          <section>
            <label for="date">有效期：</label>
            <!-- <input type="text" class="card" maxlength="4"> -->
          </section>

          <section>
            <label for="password">安全碼：：</label>
            <!-- <input type="text" class="card" maxlength="3"> -->
          </section>
        </form>

      </nav>

        <section class="btn-wrap">
          <btn  class="btn" :style="{ width: '200px'}" button-text-color="white"  button-color="#D1825B">取消</btn>
          <btn class="btn" :style="{ width: '200px'}" button-text-color="white" button-color="#D1825B">儲存</btn>
        </section>
      
    </div>

</template>

<script setup>
</script>

<style lang="scss" scoped>
.pay {
  background-color: $maincolor1;
  width: 75%;
  font-size: 20px;
  margin-left: 40px;
  h3{
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: #FFF;
    background-color: $maincolor3;
  }  
  nav{
    margin: 40px;
    display: flex;
    justify-content: space-between;
    form{
      margin: auto 0;
      .name{
        margin-top: 40px;
      }
      section {
        margin-bottom: 5%;
        margin: 40px 20px;
        label {
          font-size: 20px;
        }
      }
    }    
    .monstar{
      // width: 400px;
      // height: 400px;
      background: #fff;
      border-radius: 2rem;
      // margin: 40px;
      #divo{
        width: 400px;
        height: 400px;
      }
    }
  }

  .btn-wrap {
    margin: 0 auto;
    width: 60%;
    display: flex;
    // justify-content: space-between;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 40px;  
    .btn {
      // width: 150px;
      height: 55px;
      font-size: 20px;
      // border-radius: 10px;
    }
  }
}
</style>
