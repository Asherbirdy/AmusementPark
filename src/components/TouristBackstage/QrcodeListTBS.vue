<script setup>
import axios from 'axios';

let tableData = ref([]);

// 將資料傳到畫面
onMounted(() => {
  axios.get('../public/json/facility_qrcode.json').then(res => {
    // API 抓取到的資料：
    const data = res.data.facilityQrcode;
    // 將資料轉成 element 可以讀的參數，參考 public/json/facility_qrcode.json
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
    <div class="qr-page">
        <tour-title class="title">快速通關</tour-title>
        <section class="qrcode-wrap">
            <div class="qrcode" v-for="facility in tableData" :key="facility.id">
                <!-- <img :src="facility.qrcode" :alt="facility.name" /> -->
                <img src="@/components/TouristBackstage/Element/img/QRcode1.png" alt="">
                <h1>
                    {{ facility.name }}
                </h1>
            </div>
        </section>
        <btn class="btn"
                width="150" 
                button-text-color="white"
                button-color="#D1825B">下載圖片</btn>
                
    </div>
    
</template>

<style lang="scss" scoped>
    //te
    .qr-page {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }
    .title {
        width: 265px;
        height: 85px;
        margin-left: 10%;
    }
    .qrcode-wrap {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .qrcode {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;    
            margin: 5%;

            h1 {
                margin-top: 10%;
            }
        }
    }

    .btn {
        width: 160px;
        height: 60px;
        font-size: 16px;
        border-radius: 10px;
        margin: 0 auto;
    }
</style>