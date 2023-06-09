<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue';
const productData = reactive([]);
onMounted(() => {
  axios
    .get(axios.get(`${import.meta.env.VITE_API_URL}/frontEnd/product/product.php`))
    .then((res) => {
      // API 抓取到的資料：
      res.data.forEach((product) => {
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

});
</script>
<template>
  <main>
    <Bar />
    <Product :productData="productData" />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-top: 0;
}
</style>