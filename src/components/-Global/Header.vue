
<template>
  <header>
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

      </ul>
      <div>
        <div class="rsite">
          <template v-if="isLoggedIn === true">
            <router-link to="#">
              <icon-small-bell />
            </router-link>
          </template>


          <router-link to="/cart">
            <icon-small-basket />
            <span class="cart-quantity" v-if="cartItemCount !== null">{{ cartItemCount }}</span>
          </router-link>

          <template v-if="isLoggedIn === false">
            <router-link to="/login" id="login1">
              <icon-small-member />
            </router-link>
          </template>

          <template v-if="isLoggedIn === true">
            <details id="login2">
              <summary>
                <icon-small-member />
                <div class="AAA-shadow"></div>
              </summary>
              <div class="YYY">
                <div class="YYY-content">
                  <ul>
                    <router-link to="/admin/touristmember">
                      <li>
                        <UserFilled style="width: 20px; height: 20px; margin: 5px" class="member-s-icon" />
                        <h3>會員資料</h3>
                      </li>
                    </router-link>
                    <router-link to="/admin/pay">
                      <li>
                        <CreditCard style="width: 20px; height: 20px; margin: 5px" class="member-s-icon" />
                        <h3>付款資訊</h3>
                      </li>
                    </router-link>
                    <router-link to="/admin/touristqrcode">
                      <li>
                        <Ticket style="width: 20px; height: 20px; margin: 5px" class="member-s-icon" />
                        <h3>現有票卷</h3>
                      </li>
                    </router-link>
                    <router-link to="/admin/touristproductorder">
                      <li>
                        <Memo style="width: 20px; height: 20px; margin: 5px" class="member-s-icon" />
                        <h3>歷史訂單</h3>
                      </li>
                    </router-link>
                    <router-link class="logout" to="/" @click="logout">
                      <li>
                        <WarningFilled style="width: 20px; height: 20px; margin: 5px" class="member-s-icon" />
                        <h3>登出</h3>
                      </li>
                    </router-link>
                  </ul>
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
import { ref, nextTick, watch } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);
const cartItems = ref([]);
const cartItemCount = ref(null); // 新增 cartItemCount 變數

const checkLoginStatus = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/frontEnd/memberLogin/memberLoginCheck.php`).then(res => {
    if (res.data === '') {
      console.log('未登入');
      isLoggedIn.value = false;
      loadCartItemsFromLocal();
    } else {
      console.log('已登入');
      isLoggedIn.value = true;
      loadCartItemsFromDatabase();
    }
  }).catch(err => {
    console.log(err);
    alert('登入狀態錯誤');
  });
};

const loadCartItemsFromLocal = () => {
  const localData = sessionStorage.getItem('bookingData');
  cartItems.value = localData ? [JSON.parse(localData)] : [];
  updateCartItemCount();
};


const loadCartItemsFromDatabase = () => {
  axios.get(`${import.meta.env.VITE_API_URL}/frontEnd/cart/cartSelect.php`).then(res => {
    cartItems.value = res.data;
    updateCartItemCount();
  });
};

const updateCartItemCount = () => {
  if (cartItems.value.length === 0) {
    cartItemCount.value = null;
  } else {
    cartItemCount.value = cartItems.value.length;
  }
};

const forceUpdate = () => {
  const dummy = ref(null);
  nextTick(() => {
    dummy.value = {};
  });
};

const logout = () => {
  axios.post(`${import.meta.env.VITE_API_URL}/frontEnd/memberLogin/memberLogout.php`).then(res => {
    console.log(res.data);
    isLoggedIn.value = false;
    sessionStorage?.removeItem("token");

    router.push('/');
    window.location.reload(); // 强制刷新页面
  });
};

checkLoginStatus();

// 監聽 cartItems 的變化，更新購物車數量
watch(cartItems, () => {
  updateCartItemCount();
});
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

    a,
    #login2 {
      text-decoration: none;
      margin: auto 8px;
    }

    svg {
      padding: 4px;
      color: #5b5b5b;
    }

    .cart-quantity {
      position: absolute;
      top: 15px;
      right: 80px;
      background-color: red;
      color: white;
      font-size: 12px;
      padding: 2px 5px;
      border-radius: 50%;
    }
    .YYY {
      background: $maincolor2;
      border-radius: 0.5em;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      right: -5%;
      margin-top: 30px;
      width: 140px;
      position: absolute;
      top: 100%;
      transform: translate(-50%, -50%);
      text-align: left;

      a {
        margin: 0;
      }

      li {
        display: flex;
        width: 100%;
        cursor: pointer;

        &:hover {
          background-color: #fff;
          border-radius: 0.5em;
        }

        h3 {
          color: #5b5b5b;
          line-height: 40px;
        }
      }
    }

    .AAA-shadow {
      transition: opacity 0.2s ease-out;
      pointer-events: none;
      background: rgba(15, 23, 42, 0.8);
      position: fixed;
      opacity: 0;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
    }

    details[open] .AAA-shadow {
      pointer-events: all;
      opacity: 0;
    }

    details {
      summary {
        list-style: none;

        &:focus {
          outline: none;
        }

        &::-webkit-details-marker {
          display: none;
        }
      }
    }
  }
}

#space {
  width: 100%;
  height: 50px;
  // height: 200px;
}

a#moblie_menu {
  display: none;
}

summary {
  list-style: none;

  &:focus {
    outline: none;
  }

  &::-webkit-details-marker {
    display: none;
  }
}
</style>
