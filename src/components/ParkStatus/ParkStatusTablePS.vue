<template>
  <el-table :data="tableData" style="width: 100%">
    <!-- 遊樂設施： -->
    <el-table-column label="設施名稱" width="100">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </div>
      </template>
    </el-table-column>
    <!-- 狀態 -->
    <el-table-column label="狀態" width="80">
      <template #default="scope">
        <el-tag :type="getStatusType(scope.row.status)">{{
          scope.row.status
        }}</el-tag>
      </template>
    </el-table-column>
    <!-- 時間 -->
    <el-table-column prop="date" label="時期" width="220" />
    <!-- 說明 -->
    <el-table-column prop="reason" label="說明" width="290" />
    <!-- 按鈕 -->
    <el-table-column prop="toggle" label="開關">
      <template #default="scope">
        <!-- 按鈕範例，隱藏的按鈕不要刪掉，要參考他的寫法 -->
        <!-- <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            > -->
        <el-switch
          v-model="value3"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import axios from 'axios';
import { Timer } from '@element-plus/icons-vue';

// const handleEdit = (index, row) => {
//   console.log(index, row);
// };
// const handleDelete = (index, row) => {
//   console.log(index, row);
// };

const getStatusType = status => {
  switch (status) {
    case '正常':
      return 'success';
    case '維修中':
      return 'warning';
    case '停運':
      return 'danger';
  }
};

let tableData = ref([]);

onMounted(() => {
  axios.get('../public/json/facility_status.json').then(res => {
    // API 抓取到的資料：
    const data = res.data.facilityStatus;
    // 將資料轉成 element 可以讀的參數，參考 public/json/facility_status.json
    const fitData = data.map(facility => ({
      name: facility.name,
      date:
        facility.startDate && facility.endDate
          ? `${facility.startDate} 至 ${facility.endDate}`
          : '',
      status: facility.status,
      reason: facility.reason ?? '無',
      toggle: facility.toggle,
    }));
    //
    tableData.value = fitData;
  });
});
</script>
