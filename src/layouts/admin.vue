<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header">
        <h1>怪獸樂園後台管理系統</h1>
        <div class="userbox">
          <IconUserProfile class="icon-user" />
          <a>登出</a>
        </div>
      </el-header>
      <el-container>
        <el-aside width="120px" class="aside">
          <AdminNav />
        </el-aside>
        <el-container>
          <el-main class="main">Main</el-main>
          <el-footer class="footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
$headerHeight: 100px;
.container {
  .header {
    background-color: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $headerHeight;
    h1 {
      font-size: 20px;
    }
    .userbox {
      display: flex;
      gap: 10px;

      a {
        margin: auto 0;
      }
    }
    .icon-user {
      width: 15px;
    }
  }

  .main {
    background-color: rgb(229, 229, 229);
    height: 500px;
  }
  .footer {
    background-color: rgb(245, 245, 245);
  }
}
</style>
