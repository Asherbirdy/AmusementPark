<script setup>
import axios from 'axios';

let tableData = ref([]);

// 將資料傳到畫面
onMounted(() => {
  axios.get('../public/json/facility_qrcode.json').then(res => {
    // API 抓取到的資料：
    const data = res.data.facilityStatus;
    // 將資料轉成 element 可以讀的參數，參考 public/json/facility_status.json
    const fitData = data.map(facility => ({
        id:facility.id,  
        name: facility.name,
        qrcode: facility.qrcode
    }));
    //
    tableData.value = fitData;
    console.log(tableData);
  });
});
</script>

<template>
    <section class="qrcode-wrap">
        <tour-title>快速通關</tour-title>
        <div class="qrcode">
            <QRcode />
        </div>
    </section>
    
</template>

<style lang="scss" scoped>
    //te
    .qrcode-wrap {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }
</style>