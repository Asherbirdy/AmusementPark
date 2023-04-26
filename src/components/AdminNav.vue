<script setup>
// 開關
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
// 檢視權限等級：
const userData = JSON.parse(sessionStorage.getItem('UserData'));
// 抓取權限等級：
const permissions = userData.permissions;

// 先鎖定所有導覽列 <el-sub-menu /> 上的 disabled
let disabledOne = true;
let disabledTwo = true;
let disabledThree = true;
let disabledFour = true;
let disabledFive = true;
let disabledSix = true;

// 依照權限進行開關：
switch (permissions) {
  case 0:
    alert('權限：員工');
    disabledOne = false;
    disabledTwo = false;
    disabledFour = false;
    disabledFive = false;

    break;
  case 1:
    alert('權限：主管');

    disabledTwo = false;
    disabledThree = false;
    disabledFour = false;
    disabledFive = false;
    disabledSix = false;
    break;
  case 9:
    alert('權限：園長');
    disabledOne = false;
    disabledTwo = false;
    disabledThree = false;
    disabledFour = false;
    disabledFive = false;
    disabledSix = false;
    break;
}
// 根據不同權限來顯示頁面 導覽列：
</script>
<template>
  <el-row class="tac">
    <el-col :span="100">
      <div>logo</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1" :disabled="disabledOne">
          <template #title>
            <el-icon><location /></el-icon>
            <span>園區動態管理</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2" :disabled="disabledTwo">
          <el-icon><icon-menu /></el-icon>
          <span>活動管理</span>
        </el-menu-item>
        <el-menu-item index="3" :disabled="disabledThree">
          <el-icon><document /></el-icon>
          <span>商品管理</span>
        </el-menu-item>
        <el-menu-item index="4" :disabled="disabledFour">
          <el-icon><setting /></el-icon>
          <span>會員管理</span>
        </el-menu-item>
        <el-menu-item index="5" :disabled="disabledFive">
          <el-icon><setting /></el-icon>
          <span>Q&A</span>
        </el-menu-item>
        <el-menu-item index="6" :disabled="disabledSix">
          <el-icon><setting /></el-icon>
          <span>員工帳號管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-menu-item {
  width: 100%;
}

.tac {
  background-color: white;
}
</style>
