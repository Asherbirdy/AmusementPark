<template>
  <div class="QA">
      <QAegg></QAegg>
  </div>
  
  <!-- Messenger 洽談外掛程式 Code -->
  <div id="fb-root"></div>

  <!-- Your 洽談外掛程式 code -->
  <div id="fb-customer-chat" class="fb-customerchat"></div>

  <!--vue新增-->
  <vue-fb-customer-chat />
</template>

<script>

//vue 新增
import VueFbCustomerChat from 'vue-fb-customer-chat'
Vue.use(VueFbCustomerChat, {
  page_id: null, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})



//原始html
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute('page_id', '105529122534808');
chatbox.setAttribute('attribution', 'biz_inbox');

window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: 'v16.0',
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
</script>

<style></style>
