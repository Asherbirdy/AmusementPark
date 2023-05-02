<template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="員工編號" prop="id" />
    <el-table-column label="員工帳號" prop="Account" />
    <el-table-column label="員工密碼" prop="PWD" />
    <el-table-column label="員工權限" prop="permissions" />
    <el-table-column align="right">
      <!-- <el-input v-model="search" size="small" placeholder="Type to search" /> -->

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
import { computed, ref } from 'vue';
import axios from 'axios';

let tableData = reactive([]);

axios
  .post('/api/PDO/Select.php', {})
  .then(res => {
    const data = res.data.reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {});
    Object.assign(tableData, data);
  })
  .catch(err => {
    console.log(err);
    alert('伺服器問題');
  });

const search = ref('');
const filterTableData = computed(() =>
  tableData.filter(
    data =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

console.log(filterTableData);
</script>
