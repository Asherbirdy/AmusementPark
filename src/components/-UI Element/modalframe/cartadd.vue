<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);

const options = ref([{ size: 'S' }, { size: 'M' }, { size: 'L' }]);

const num = ref(1);
function handleChange(value) {
  console.log(value);
}

const btns = ref([{ action: '加入購物車' }, { action: '立即購買' }]);
</script>

<template>
  <modal-l>
    <div class="wrap">
      <img class="wrap__leftImg" :src="imgURL('bag1.png')" />
      <div class="wrap__rightDiv">
        <h1 class="wrap__rightDiv--h1">MONSTAR上衣</h1>
        <p class="wrap__rightDiv--p">
          MONSTAR純棉短袖上衣<br />消費滿$1000免運費<br />NT$600
        </p>
        <form class="wrap__rightDiv--from" action="">
          <label class="wrap__rightDiv--formLabel" for="">尺寸</label>
          <select class="wrap__rightDiv--formSelect">
            <option disabled>請選擇尺寸</option>
            <option v-for="(option, index) in options">
              {{ option.size }}
            </option>
          </select>
          <label class="wrap__rightDiv--formLabel">數量</label>
          <el-input-number
            v-model="num"
            :min="1"
            :max="10"
            @change="handleChange"
            class="wrap__rightDiv--formCount"
          />

          <button class="wrap__rightDiv--formBtn" v-for="(btn, index) in btns">
            {{ btn.action }}
          </button>
        </form>
      </div>
    </div>
  </modal-l>
</template>

<style lang="scss" scoped>
.wrap {
  width: 940px;
  display: flex;
  margin-left: 51px;
  margin-top: 40px;
  margin-bottom: 100px;

  &__leftImg {
    width: 532px;
  }

  &__rightDiv {
    width: 400px;
    margin-left: 72px;

    &--h1 {
      font-size: 30px;
      line-height: 36px;
      margin-top: 37px;
      margin-bottom: 30px;
    }
    &--p {
      font-size: 20px;
      line-height: 40px;
    }
    // &--from {
    // }
    &--formLabel {
      display: block;
      font-size: 20px;
      margin-top: 30px;
      margin-bottom: 10px;
    }
    &--formSelect,
    &--formCount {
      width: 335px;
      height: 50px;
      font-size: 20px;
      text-align: center;
    }
    &--formBtn {
      width: 150px;
      height: 50px;
      border-radius: 5px;
      font-size: 20px;
      background-color: $textcolor5;
      margin-top: 30px;
      margin-right: 35px;
    }
  }
}
</style>
