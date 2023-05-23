<template>
  <el-table :data="tableData" style="width: 100%">
    <!-- 遊樂設施： -->
    <el-table-column label="設施名稱" width="100">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon>
            <timer />
          </el-icon>
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
    <el-table-column label="時期" prop="date" width="220" />
    <!-- 說明 -->
    <el-table-column prop="reason" label="說明" width="290" />
    <!-- 按鈕 -->
    <el-table-column prop="toggle" label="開關">
      <template #default="scope">
        <!-- 按鈕範例，隱藏的按鈕不要刪掉，要參考他的寫法 -->
        <el-switch @change="handleSwitchChange(scope.row)" :disabled="isDisabled" v-model="scope.row.toggle" class="ml-2"
          :style="getSwitchStyle(scope.row)" />
      </template>
    </el-table-column>
  </el-table>
  <!-- 彈跳視窗 -->
  <ModalClosePS v-if="modalClose" @close="modalClose = false" />
  <ModalOpenPS v-if="modalOpen" @close="modalOpen = false" />
</template>

<script setup>
import axios from 'axios';
import { Timer } from '@element-plus/icons-vue';

// 園區狀態顏色
const getSwitchStyle = row => {
  return {
    '--el-switch-on-color': row.toggle ? '#13ce66' : '#cccccc',
    '--el-switch-off-color': row.toggle ? '#cccccc' : '#ff4949',
  };
};


let modalClose = ref(false);
let modalOpen = ref(false);
// 園區狀態字串邏輯
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

// 資料存放的地方
let tableData = ref([]);

// 將資料傳到畫面
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

// 如果權限不是高階主管，他不能點擊開關，且會鎖定：
const isDisabled = computed(() => {
  const permissions = JSON.parse(sessionStorage.getItem('permissions'));
  return permissions !== 9;
});

const handleSwitchChange = row => {
  if (!row.toggle) {
    modalClose.value = true;
  } else {
    modalOpen.value = true;
  }
};

const handleCloseModalClose = () => {
  modalClose.value = false;
};

const handleCloseModalOpen = () => {
  modalOpen.value = false;
};

console.log(tableData);
</script>
