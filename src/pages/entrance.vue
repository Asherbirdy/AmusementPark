<script setup>
const goTop = () => {
  window.scrollTo({ top: 0 });
};
</script>

<template>
  <div class="wrapper">
    <logo class="logo" />
    <img src="../assets/img/entrance.png" alt="" />
    <div class="entrance">
      <router-link to="/">
        <h1 class="front" @click="goTop">前台</h1>
      </router-link>
      <router-link to="staff/login">
        <h1 class="back" @click="goTop">後台</h1>
      </router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
#headerbg{
  display: none !important;
}
footer{
  display: none !important;
}
.wrapper {
  width: 1200px;
  margin: 0 auto;
  .logo {
    width: 300px;
    margin: 15px 460px 15px;
  }
  img {
    width: 1200px;
    margin-bottom: 100px;
  }
  .entrance {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: -100px 0 200px;
    .front {
      text-decoration: none;
      background-image: url(/AmusementPark/src/assets/img/MonsterCrowd.png);
      width: 147px;
      height: 192px;
    }
    a{
      text-decoration: none;
      color: #fff;
    }
    .back {
      background-image: url(/AmusementPark/src/assets/img/MonsterParking.png);
      width: 147px;
      height: 192px;
    }
    h1{
      
      line-height: 5.2;
        padding-left: 46px;
        letter-spacing: 20px;
        cursor: pointer;
        border: none;
        background-color: #fff;
        font-size: 40px;
        font-weight: bold;
    }
  }
}

</style>
<route>
  {
      meta: {
        layout: false,
      }
  }
</route>