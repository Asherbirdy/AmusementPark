<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header">
        <div class="logoTitle">
          <logo style="width: 40px" />
          <h1>怪獸樂園後台管理系統</h1>
        </div>

        <div class="userbox">
          <p>ID:MP2313</p>
          <p>等級:高階主管</p>
          <router-link class="logout" to="/staff/login">
            <el-button>登出</el-button></router-link
          >
        </div>
      </el-header>
      <el-container>
        <el-aside width="120px" class="aside">
          <AdminNav />
        </el-aside>
        <el-container>
          <el-main class="main">
            <RouterView />
          </el-main>
          <el-footer class="footer"><p>版本資訊：1.2.44</p></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="scss">
$headerHeight: 100px;

p {
  font-size: 16px;
}
.container {
  .header {
    background-color: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $headerHeight;
    .logoTitle {
      display: flex;
      gap: 10px;
      justify-content: center;
    }
    h1 {
      font-size: 20px;
    }
    .logout {
      text-decoration: none;
    }
    .userbox {
      display: flex;
      gap: 10px;
      display: flex;
      align-items: center;

      a {
        margin: auto 0;
      }
    }
    .icon-user {
      width: 15px;
    }
  }

  .main {
    /*  background-color: rgb(229, 229, 229);*/
    height: 500px;
  }
  .footer {
    background-color: rgb(245, 245, 245);
    display: flex;
    align-items: center;
    justify-content: end;
    color: rgb(195, 195, 195);
  }
}
main {
  padding-top: 30px;
}
</style>
