<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
    >
      <el-table-column prop="orderID" label="訂單編號" sortable />
      <el-table-column prop="name" label="名稱" sortable />
      <el-table-column prop="numbers" label="數量" sortable />
      <el-table-column prop="totalPrice" label="價格" sortable />
      <el-table-column prop="deliveryStatus" label="寄送狀態" sortable />
    </el-table>
  </div>
</template>
<script setup>
const tableData = [
  {
    id: 1,
    orderID: '234234234',
    name: '帽子 S 藍色',
    totalPrice: 200,
    numbers: 3,
    deliveryStatus: '已完成',
  },
  {
    id: 2,
    orderID: '234234234',
    name: '帽子 S 藍色',
    totalPrice: 200,
    numbers: 3,
    deliveryStatus: '已完成',
  },
  {
    id: 3,
    orderID: '234234234',
    numbers: 3,
    totalPrice: 200,
    name: '',
    deliveryStatus: '已完成',
    children: [
      {
        id: 31,
        orderID: '234234234',
        numbers: 1,
        totalPrice: 200,
        name: '帽子 S 藍色',
        deliveryStatus: '已完成',
      },
      {
        id: 32,
        orderID: '20160501',
        numbers: 2,
        totalPrice: 200,
        name: '帽子 S 藍色',
        deliveryStatus: '已完成',
      },
    ],
  },
  {
    id: 4,
    orderID: '20160503',
    numbers: 3,
    totalPrice: 200,
    name: '帽子 S 藍色',
    deliveryStatus: '寄送中',
  },
];
</script>
