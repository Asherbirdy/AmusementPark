<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="員工編號" prop="id" />
    <el-table-column label="員工帳號" prop="account" />
    <el-table-column label="權限" prop="permissions" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import axios from 'axios';
import { computed, ref } from 'vue';

let tableData = ref([]);



onMounted(() => {
  axios.get('/api/PDO/staffAccount/staffAccountSelect.php').then(res => {
    // API 抓取到的資料：
    const data = res.data;
    console.log(data);


    // 將資料轉成 element 可以讀的參數，參考 public/json/facility_status.json
    const staffData = data.map(staff => ({
      id: staff.id,
      account: staff.Account,
      permissions: staff.permissions,
      // date:
      //   facility.startDate && facility.endDate
      //     ? `${facility.startDate} 至 ${facility.endDate}`
      //     : '',
    }));
    //

    tableData.value = staffData;
    console.log(tableData);


  });
});

// const search = ref('');
// const filterTableData = computed(() =>
//   tableData.filter(
//     data =>
//       !search.value ||
//       data.name.toLowerCase().includes(search.value.toLowerCase())
//   )
// );
// const handleEdit = (index: number, row: User) => {
//   console.log(index, row);
// };
// const handleDelete = (index: number, row: User) => {
//   console.log(index, row);
// };
</script>
