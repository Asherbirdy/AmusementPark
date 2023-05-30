<template>
  
  <header :class="{ openMenu: isOpen }">
    <headerbg id="headerbg" />
    <nav>
      <router-link to="/" class="logo">
        <logo />
      </router-link>

      <ul id="menu">
        <li>
          <router-link to="/ticket">
            <icon-ticket />
            <h3>快速購票</h3>
          </router-link>
        </li>

        <li>
          <router-link to="/create">
            <icon-create />
            <h3>喬裝打扮</h3>
          </router-link>
        </li>

        <li>
          <router-link to="/map">
            <icon-map />
            <h3>怪獸領地</h3>
          </router-link>
        </li>
        <li>
          <router-link to="/notice">
            <icon-about />
            <h3>領地須知</h3>
          </router-link>
        </li>

        <li>
          <router-link to="/shop">
            <icon-shop />
            <h3>走私商人</h3>
          </router-link>
        </li>

        <!-- <li>
          <router-link to="/admin/touristmember">
            <icon-membership />
            <h3>冒險者專區</h3>
          </router-link>
        </li> -->
      </ul>
      <!-- <a id="moblie_menu" @click="handMenuOpen" href="javascript:;"></a> -->
      <div>
        <div class="rsite">
          <template v-if="isLoggedIn === true">
            <router-link to="#">
              <icon-small-bell />
            </router-link>            
          </template>

          
          <router-link to="/cart">
            <icon-small-basket />
          </router-link>

          <template v-if="isLoggedIn === false">
            <router-link to="/login" id="login1">
              <icon-small-login />
            </router-link>
          </template>

          <template v-if="isLoggedIn === true">
            <details id="login2">
              <summary>
                <icon-small-login />
              </summary>
              <div class="YYY">
                <div class="YYY-content">
                  <ul>
                    <li>
                      <router-link to="/admin/touristmember">
                          <UserFilled style="width: 20px; height: 20px; margin: 0px" />會員資料
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/admin/pay">
                        <CreditCard style="width: 20px; height: 20px; margin: 0px" />付款資訊
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/admin/touristqrcode">
                        <Ticket style="width: 20px; height: 20px; margin: 0px" />現有票卷
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/admin/touristproductorder">
                        <Memo style="width: 20px; height: 20px; margin: 0px" />歷史訂單
                      </router-link>
                    </li>
                  </ul>
                  <div class="logout" to="/" @click="logout">
                    <el-button>登出</el-button>
                  </div>
                </div>
              </div>
            </details>            
          </template>
        </div>
      </div>
    </nav>
  </header>
  <div id="space"></div>
</template>
<script setup>
import { ref, nextTick  } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);

const checkLoginStatus = () => {
  axios
    .post('/api/PDO/frontEnd/memberLogin/memberLoginCheck.php')
    .then(res => {
      if (res.data === '') {
        console.log('還沒登入');
        isLoggedIn.value = false;
      } else {
        console.log('已經登入了');
        isLoggedIn.value = true;
      }
      forceUpdate(); // 強制重新渲染
    })
    .catch(err => {
      console.log(err);
      alert('登入狀態檢查出錯');
    });
};

const forceUpdate = () => {
  // 透過引用的方式強制觸發組件的重新渲染
  const dummy = ref(null);
  nextTick(() => {
    dummy.value = {};
  });
};

const logout = () => {
  axios.post('/api/PDO/frontEnd/memberLogin/memberLogout.php').then(res => {
    console.log(res.data);
    isLoggedIn.value = false;
    router.push('/');
  });
};

checkLoginStatus(); // 檢查登入狀態
</script>
<style scoped lang="scss">
#headerbg {
  // display: none;
  width: 100%;
  // background-color: #f9f3e4;
  position: absolute;
  z-index: -1;

}

header {
  // top: -200px;
  // position: relative;
  font-family: $font-family;
  background-color: #f9f3e4;
  width: 100%;
  height: 150px;
  // filter: brightness(100%) drop-shadow(0px 0px 5px #5b5b5b); 
  // position: fixed;
  position: relative;
  z-index: 15;

  nav {
    display: flex;
    position: relative;
    width: $workspace;
    margin: 0 auto;
    justify-content: space-between;
    top: 6px;

    .logo {
      margin: auto 40px;
    }
  }

  #menu {
    // width: 40%;
    list-style: none;
    display: flex;
    float: left;
    justify-content: space-between;
    a {
      display: flex;
      flex-direction: column;
      float: left;
      margin: 0 2px;
      padding: 0 20px;
      text-decoration: none;
      filter: brightness(0%);
      opacity: 0.6;
      transition: all 0.3s linear;
      h3 {
        margin: 4px auto 0;
        text-align: center;
        // font-size: 16px;
        color: #ff7b51;
      }
    }
    a:hover {
      filter: brightness(100%) drop-shadow(1px 1px 1px #000000);
      opacity: 1;
      transition-duration: 0.3s;
    }
  }

  .rsite {
    color: #5b5b5b;
    display: flex;
    justify-content: space-between;
    padding: 4px;
    margin: 10px;
    align-items: center;
    a {
      text-decoration: none;
      margin: auto 8px;
    }
    svg {
      padding: 4px;
      color: #5b5b5b;
    }

    .YYY {
      background: $maincolor2;
      // width: 100px;
      border-radius: 0.5em;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      right:  0%;
      margin-top: 10px;
      // pointer-events: none;
      position: absolute;
      top: 100%;
      transform: translate(-50%, -50%);
      text-align: left;
      // display: flex;
      // flex-direction: column;
    }

    details{
      summary {
        list-style: none;
      }
      summary:focus {
        outline: none;
      }
      summary::-webkit-details-marker {
        display: none;
      }
    }
  }
}

#space{
  width: 100%;
  height: 50px;
  // height: 200px;
}
a#moblie_menu {
  display: none;
}
summary {
  list-style: none;
}
summary:focus {
  outline: none;
}
summary::-webkit-details-marker {
  display: none;
}
</style>
