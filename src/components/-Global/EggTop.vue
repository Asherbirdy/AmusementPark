<template>
  <div class="QA">
      <QAegg></QAegg>
  </div>
  
  <!-- Messenger 洽談外掛程式 Code -->
  <div id="fb-root"></div>

  <!-- Your 洽談外掛程式 code -->
  <div id="fb-customer-chat" class="fb-customerchat"></div>
</template>

<script>
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
