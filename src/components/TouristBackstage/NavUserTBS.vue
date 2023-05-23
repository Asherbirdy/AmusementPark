<script setup></script>

<template>
  <div class="nav">
    <ul>
      <li>
        <router-link to="/admin/touristmember">
          <memberInfo class="icon"/>
          <h3>
            會員資料
          </h3>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/pay">
          <tickOrder class="icon" />
          <h3>
            付款資訊
          </h3>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/touristqrcode">
          <QRcode class="icon" />
          <h3>
            現有票卷
          </h3>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/touristproductorder">
          <myOrder class="icon" />
          <h3>
            歷史訂單
          </h3>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f9f3e4;
  width: 360px;
  line-height: 1.2;
  color: #5b5b5b;

  li {

    .icon {
      color: #5b5b5b;
      margin-bottom: 20px;
    }

    a {
      color: #5b5b5b;
      height: 200px;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    a:hover {
      background-color: #A5C4E1;
    }
  }
}
</style>
