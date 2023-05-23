<template>
  <div class="wrapper">
    <!-- 商品類別選單： -->
    <el-select v-model="value" class="m-2" placeholder="商品分類">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-button>加入商品</el-button>
  </div>
</template>

<script setup>
const value = ref('');

const options = [
  {
    value: 'Option1',
    label: '帽子',
  },
  {
    value: 'Option2',
    label: '衣服',
  },
  {
    value: 'Option3',
    label: '手機殼',
  },
];
</script>

<style scoped lang="scss">
//

.wrapper {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
