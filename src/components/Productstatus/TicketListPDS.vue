<script setup>
const tableData = [
  {
    id: 1,
    orderDate: '2016-05-02',
    numbers: 3,
    ticketType: '成人票',
  },
  {
    id: 2,
    orderDate: '2016-05-04',
    numbers: 4,
    ticketType: '兒童票',
  },
  {
    id: 3,
    orderDate: '2016-05-01',
    numbers: 1,
    ticketType: '優惠票',
  },
  {
    id: 4,
    orderDate: '2016-05-03',
    numbers: 5,
    ticketType: '成人票',
  },
];
</script>
<template>
  <el-table
    :data="tableData"
    style="width: 100%; margin-bottom: 20px"
    row-key="id"
    border
    default-expand-all
  >
    <el-table-column prop="orderDate" label="訂票時間" sortable />
    <el-table-column prop="numbers" label="數量" />
    <el-table-column prop="ticketType" label="票種" />
  </el-table>
</template>
<style scoped lang="scss">
main {
  h3 {
    margin-bottom: 20px;
  }
}
</style>
