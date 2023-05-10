<template>
  <div>
    <input type="color" id="colorPicker">
    <div class="box"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 在這裡定義一個顏色值的狀態
const color = ref('#ffffff');

</script>

<script>
import $ from 'jquery';

export default {
  mounted() {
    // 當組件掛載時載入 jQuery
    $('#colorPicker').change(function(){
      console.log($(this).val());
      $('.box').css({backgroundColor: $(this).val() });
      // 更新顏色值狀態
      color.value = $(this).val();
    });
  }
}
</script>
