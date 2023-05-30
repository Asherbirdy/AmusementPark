<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
const productData = reactive([]);
const clothes = reactive([]);
const keyword = '上衣'; // 要搜尋的關鍵字

onMounted(() => {
  axios
    .get("/api/PDO/product/product.php")
    .then((res) => {
      // API 抓取到的資料：
      const data = res.data;
      data.forEach((product) => {
        productData.push({
          id: product.PRODUCT_ID,
          name: product.PRODUCT_NAME,
          price: product.PRICE,
          url: product.PRODUCT_URL,
          size: product.SIZE_TYPE,
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
  // console.log(productData);
  setTimeout(() => {
    productData.forEach(product => {
      if (product.name.includes(keyword) && !clothes.some(item => item.name === product.name)) {
        clothes.push(product);
      }
    });
  }, 100);

  console.log(clothes);

});
</script>
<template>
  <main>
    <Bar />
    <Clothes :clothes="clothes" />
    <Cap />
    <Bag />
    <PhoneCase />
    <!-- <Customization />
    <MonsterMaker /> -->
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: 0;
}
</style>