<template>
  <el-button>加入類別 </el-button>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="ID" prop="id" />
    <el-table-column label="商品分類" prop="name" />
    <el-table-column align="right">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">編輯</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">刪除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
const search = ref('');
const filterTableData = computed(() =>
  tableData.filter(
    data =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
const handleEdit = (index, row) => {
  console.log(index, row);
};
const handleDelete = (index, row) => {
  console.log(index, row);
};

const tableData = [
  {
    id: 0,
    name: '帽子',
  },
  {
    id: 1,
    name: '衣服',
  },
  {
    id: 2,
    name: '手機殼',
  },
];
</script>

<style scoped lang="scss"></style>
