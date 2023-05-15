<template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="活動時間" prop="date" />
    <el-table-column label="上架日" prop="shelfDate" />
    <el-table-column label="下架日" prop="retirementDate" />
    <el-table-column label="主題" prop="topic" />
    <el-table-column label="園區位置" prop="position" />
    <el-table-column label="編輯" align="center">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >編輯</el-button
        >
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
    date: '2016-05-03',
    shelfDate: '2016-06-08',
    retirementDate: '2016-06-30',
    topic: 'Party Clown',
    position: '遊樂設施一',
  },
  {
    date: '2016-05-02',
    shelfDate: '2016-06-08',
    retirementDate: '2016-06-30',
    topic: 'Party Clown',
    position: '遊樂設施一',
  },
  {
    date: '2016-05-04',
    shelfDate: '2016-06-08',
    retirementDate: '2016-06-30',
    topic: 'Party Clown',
    position: '遊樂設施一',
  },
  {
    date: '2016-05-01',
    shelfDate: '2016-06-08',
    retirementDate: '2016-06-30',
    topic: 'Party Clown',
    position: '遊樂設施一',
  },
];
</script>
