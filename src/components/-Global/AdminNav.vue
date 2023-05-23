<script setup>
const route = useRoute();
const routePath = useRoute().path


let routePathNum = ref('1');

// 動態nav
switch (routePath) {
  case '/staff/parkstatus':
    routePathNum = '1'
    console.log(routePathNum);
    break;
  case '/staff/activity':
    routePathNum = '2'
    console.log(routePathNum);
    break;
  case '/staff/productstatus':
    routePathNum = '3'
    console.log(routePathNum);
    break;
  case '/staff/productmanage':
    routePathNum = '4'
    console.log(routePathNum);
    break;
  case '/staff/staffaccount':
    routePathNum = '5'
    console.log(routePathNum);
    break;
}


// 開關
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath);
};
// 檢視權限等級：
const userData = JSON.parse(sessionStorage.getItem('UserData'));

// 抓取權限等級：
// const permissions = userData.permissions;

//測試資料用：
const permissions = 9;
(function () {
  sessionStorage.setItem('permissions', permissions);
})();

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
    console.log('權限：員工');
    disabledOne = false;
    disabledTwo = false;
    disabledFour = false;
    disabledFive = false;

    break;
  case 1:
    console.log('權限：主管');

    disabledTwo = false;
    disabledThree = false;
    disabledFour = false;
    disabledFive = false;
    disabledSix = false;
    break;
  case 9:
    console.log('權限：園長');
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
      <el-menu :default-active="routePathNum" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <!-- Nav1 -->
        <router-link class="nav" to="/staff/parkstatus">
          <el-menu-item index="1" :disabled="disabledOne">
            <span>園區動態管理</span>
          </el-menu-item>
        </router-link>
        <!-- Nav2 -->
        <router-link class="nav" to="/staff/activity">
          <el-menu-item index="2" :disabled="disabledTwo">
            <span>活動管理</span>
          </el-menu-item>
        </router-link>
        <!-- Nav3 -->
        <router-link class="nav" to="/staff/productstatus">
          <el-menu-item index="3" :disabled="disabledThree">
            <span>訂單狀態</span>
          </el-menu-item>
        </router-link>

        <!-- Nav5 -->
        <router-link class="nav" to="/staff/productmanage">
          <el-menu-item index="4" :disabled="disabledFive">
            <span>商品管理</span>
          </el-menu-item>
        </router-link>
        <!-- Nav6 -->
        <router-link class="nav" to="/staff/staffaccount">
          <el-menu-item index="5" :disabled="disabledSix">
            <span>員工帳號管理</span>
          </el-menu-item>
        </router-link>
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
  padding: 10px 0;
}

.nav {
  text-decoration: none;
}
</style>
