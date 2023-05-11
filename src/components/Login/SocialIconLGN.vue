<script setup>
// 有時間在嘗試，如何用v-for跑出svg.vue檔
// const imgIcons = ref([
//   {
//     path: '../../assets/img/bag.png'
//   },
//   {
//     path: '../../assets/img/bag.png'
//   },
//   {
//     path: '../../assets/img/bag.png'
//   },
// ]);
</script>

<template>
  <section class="bottom">
    <hr class="bottom__hr" />
    <div class="bottom__wrapOfIcon">
      <!-- <img class="bottom__wrapOfIcon--icon" v-for="(imgIcon, index) in imgIcons" :key="index" :src="imgIcon.path"/> -->
      <img class="bottom__wrapOfIcon--icon" src="../../assets/svg/iconline.svg" alt="">
      <img class="bottom__wrapOfIcon--icon" src="../../assets/svg/iconfb.svg" alt="">
      <img class="bottom__wrapOfIcon--icon" src="../../assets/svg/icongmail.svg" alt="">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 45px;

  &__hr {
    display: block;
    height: 1px;
    width: 552px;
    background-color: black;
    margin: 0 auto;
    margin-bottom: 29px;
  }

  &__wrapOfIcon {
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin: 0 auto;

    &--icon {
      width: 65px;
    }
  }
}
</style>
