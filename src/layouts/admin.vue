<script setup>
import axios from 'axios';
const router = useRouter();
const permissions = ref('');
const account = ref('');

// 用mapping table取代if else
const permissionMap = {
  999: 'DBA',
  9: '園長',
  1: '高階主管',
};


// 驗證是否已經登入
// 寫在onMounted裡面是為了渲染登入者的資料
onMounted(() => {
  axios
    .post('/api/PDO/backEnd/staffAccount/staffLoginCheck.php')
    .then(res => {
      if (res.data === '') {
        alert('請先登入');
        router.push('/staff/login');
      } else {
        const [accountValue, permissionsValue] = res.data;
        account.value = accountValue;
        permissions.value = permissionMap[permissionsValue] || '一般員工';
      }
    })
    .catch(err => {
      console.log(err);
      alert('登入狀態檢查出錯');
    });
});

// 登出按鈕function
const logout = () => {
  axios.post('/api/PDO/backEnd/staffAccount/staffLogout.php').then(res => {
    console.log(res.data);
    router.push('/staff/login');
  });
};
</script>
<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header class="header">
        <div class="logoTitle">
          <logo style="width: 40px" />
          <h1>怪奇樂園後台管理系統</h1>
        </div>

        <div class="userbox" style="">
          <p>ID:{{ account }}</p>
          <p>等級:{{ permissions }}</p>
          <div class="logout" to="/staff/login" @click="logout">
            <el-button>登出</el-button>
          </div>
          <IconUserProfile class="icon-user" />

          <!-- <el-button
            name="submit"
            type="primary"
            style="width: 46%"
            @click="logout"
            >登出</el-button
          > -->
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
          <el-footer class="footer">
            <p>版本資訊：1.2.44</p>
          </el-footer>
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
