<script setup>
console.log(import.meta.env.VUE_APP_AJAX_BASE_URL);
</script>

<template>
  <VideoBannerIDX id="VideoBannerIDX" />
  <title-big1 id="title-big1">前導故事</title-big1>
  <TeaserIDX id="TeaserIDX" />
  <!-- 小怪獸彈窗 -->

  <monster-create />

  <InformationIDX />
  <login></login>
</template>
<style scoped lang="scss">
#VideoBannerIDX {
  margin-top: -50px;
}

#title-big1 {
  padding-top: 80px;
}

#TeaserIDX {
  padding-top: 0;
  margin-top: 80px;
}
</style>
