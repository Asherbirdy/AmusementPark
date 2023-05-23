<template>
  <ModalDelete
    v-model="showmodal"
    :id="id"
    :account="account"
    :permissions="permissions"
  />

  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="員工編號" prop="id" />
    <el-table-column label="員工帳號" prop="account" />
    <el-table-column label="權限" prop="permissions" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit">編輯</el-button>

        <el-button
          size="small"
          type="danger"
          v-model="showmodal"
          :id="id"
          :account="account"
          :permissions="permissions"
          @click="openModal(scope.row)"
          >刪除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import axios from "axios";
import { computed, ref } from "vue";
let showmodal = ref(false);
let tableData = ref([]);

onMounted(() => {
  axios.get("/api/PDO/staffAccount/staffAccountSelect.php").then(res => {
    // API 抓取到的資料：
    const data = res.data;
    // console.log(data);

    // 把抓到的權限轉成中文
    const staffDataZh = data.map(staff => {
      const { PURVIEW_LEVEL_ID } = staff;

      if (PURVIEW_LEVEL_ID === 999) {
        staff.permissions = "DBA";
      } else if (PURVIEW_LEVEL_ID === 9) {
        staff.permissions = "園長";
      } else if (PURVIEW_LEVEL_ID === 1) {
        staff.permissions = "主管";
      } else {
        staff.permissions = "員工";
      }
      return staff;
    });

    // 將資料轉成 element 可以讀的參數，參考 public/json/facility_status.json
    const staffData = data.map(staff => ({
      id: staff.BACKSTAGE_MEMBER_ID,
      account: staff.ACCOUNT,
      permissions: staff.permissions,
    }));
    tableData.value = staffData;
    // console.log(tableData);
  });
});

let id = ref(0);
const account = ref("");
const permissions = ref("");

// 打開彈窗
const openModal = rowData => {
  showmodal.value = true;
  id.value = rowData.id;
  account.value = rowData.account;
  permissions.value = rowData.permissions;
};

// 關閉彈窗
const closeModal = () => {
  showmodal.value = false;
  console.log("關閉彈窗");
};
</script>
