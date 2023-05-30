<script setup></script>

<template>
  
  <div class="nav">
    <ul>
      <li>
        <router-link to="/admin/touristmember">
            <UserFilled style="width: 4em; height: 4em; margin: 8px" />
          <h3>
            會員資料
          </h3>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/pay">
          <!-- <tickOrder class="icon" /> -->
          <CreditCard style="width: 4em; height: 4em; margin: 8px" />
          <h3>
            付款資訊
          </h3>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/touristqrcode">
          <Ticket style="width: 4em; height: 4em; margin: 8px" />
          <h3>
            現有票卷
          </h3>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/touristproductorder">     
          <Memo style="width: 4em; height: 4em; margin: 8px" />
          <h3>
            歷史訂單
          </h3>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nav{
  width: 20%;
}
ul {
  width: 100%;
  line-height: 1.2;
  color: #5b5b5b;

  li {
    width: 100%;
    background-color: #f9f3e4;
    h3{
      margin-top: -10px;
    }
    a {
      color: #5b5b5b;
      height: 140px;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;   
      &:hover {
        background-color: #A5C4E1;
      }
    }
  }
}
</style>
