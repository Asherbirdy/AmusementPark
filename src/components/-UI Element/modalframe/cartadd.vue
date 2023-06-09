<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);

const btns = [{ title: '加入購物車' }, { title: '立即購買' }];

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  productData: {
    type: Array,
    required: true
  }
});

// 解決size問題
const options = computed(() => {
  const keyword = props.item.name;
  return props.productData.filter(product => product.name.includes(keyword));
});

// 抓出商品數量
const quantity = ref(1);

// 抓出尺寸
const size = ref('請選擇尺寸');


// 判斷是否登入

onMounted(async () => {
  // 如果是登入狀態
  if (sessionStorage.getItem('token')) {
    await showOrderFromDB();
    // 抓商品資料
  } else {
    await showOrderFromSession();
    // 抓商品資料
  }
});



// 將資料存到localstorage
const addLocal = () => {
  // console.log(props.item);
  // 獲取現有的資料
  const existingData = localStorage.getItem('productData');
  let arr = [];
  if (existingData) {
    // 解析現有資料為陣列
    arr = JSON.parse(existingData);
  }
  // 處理陣列
  arr.push({
    productId: props.item.id,
    productNum: quantity.value,
    porductName: props.item.name,
    prouductSize: size.value,
    productPrice: props.item.price
  })
  // 將陣列轉換為 JSON 字串
  const jsonString = JSON.stringify(arr);
  // 將 JSON 字串存儲到 localStorage
  localStorage.setItem('productData', jsonString);
}
</script>

<template>
  <modal-l>
    <div class="wrap">
      <img class="wrap__leftImg" :src="imgURL(props.item.url)" />
      <div class="wrap__rightDiv">
        <h1 class="wrap__rightDiv--h1">{{ props.item.name }}</h1>
        <p class="wrap__rightDiv--p">
          消費滿$1000免運費<br />NT.{{ props.item.price }}
        </p>
        <form class="wrap__rightDiv--from" action="">
          <label class="wrap__rightDiv--formLabel" for="">尺寸</label>
          <select class="wrap__rightDiv--formSelect" v-model="size">
            <option disabled>請選擇尺寸</option>
            <option v-for="(option, index) in options" :value="option.size">
              {{ option.size }}
            </option>
          </select>
          <label class="wrap__rightDiv--formLabel">數量</label>
          <el-input-number v-model="quantity" :min="1" :max="10" class="wrap__rightDiv--formCount" />

          <Button class="wrap__rightDiv--formBtn" v-for="(btn, index) in btns" @click.prevent="addLocal">
            {{ btn.title }}
          </Button>
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
    border: 2px solid $textcolor5;
    border-radius: 20px;
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
