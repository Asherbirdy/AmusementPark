<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="category" label="類別" width="150" />
    <el-table-column prop="productName" label="商品名稱" width="120" />
    <el-table-column prop="color" label="顏色" width="120" />
    <el-table-column prop="size" label="尺寸" width="120" />
    <el-table-column prop="price" label="價格" width="120" />
    <el-table-column prop="productStatus" label="狀態" width="120" />
    <el-table-column fixed="right" label="編輯" width="120"> </el-table-column>
  </el-table>
</template>

<script setup>
const handleClick = () => {
  console.log('click');
};

const tableData = [
  {
    category: '帽子',
    productName: '超炫帽帽',
    color: '藍色',
    size: 'S',
    price: 2000,
    productStatus: '上架中',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    category: '帽子',
    productName: '超炫帽帽',
    color: '紅色',
    size: 'S',
    price: 2000,
    productStatus: '上架中',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    category: '帽子',
    productName: '超炫帽帽',
    color: '黃色',
    size: 'S',
    price: 2000,
    productStatus: '上架中',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    category: '衣服',
    productName: '超炫衣服',
    color: '橘色',
    size: 'S',
    price: 2000,
    productStatus: '上架中',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    category: '衣服',
    productName: '超炫衣服',
    color: '橘色',
    size: 'S',
    price: 2000,
    productStatus: '上架中',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    category: '衣服',
    productName: '超炫衣服',
    color: '橘色',
    size: 'S',
    price: 2000,
    productStatus: '上架中',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    category: '衣服',
    productName: '超炫衣服',
    color: '橘色',
    size: 'S',
    price: 2000,
    productStatus: '上架中',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    category: '衣服',
    productName: '超炫衣服',
    color: '橘色',
    size: 'S',
    price: 2000,
    productStatus: '上架中',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    category: '衣服',
    productName: '超炫衣服',
    color: '橘色',
    size: 'S',
    price: 2000,
    productStatus: '上架中',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    category: '衣服',
    productName: '超炫衣服',
    color: '橘色',
    size: 'S',
    price: 2000,
    productStatus: '上架中',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
];
</script>
