<script setup>
import axios from 'axios';
import getImageUrl from '@/utils/imgPath';

let tableData = ref([]);
const imgURL = name => getImageUrl(name);

// 將資料傳到畫面
onMounted(() => {
  axios.get('/api/PDO/touristBackStage/qrcodeSelect.php').then(res => {
    // API 抓取到的資料：
    const data = res.data;
    // console.log (data);
    // 將資料轉成 element 可以讀的參數

    const fitData = data.map(facility => ({
        id:facility.RIDES_ID,  
        name: facility.RIDES_NAME,
        qrcode: facility.RIDES_QRCODE_URL
    }));
    //
    tableData.value = fitData;
    console.log(tableData);
  });
});
</script>

<template>
    <div class="qr-page">
        <tour-title class="title">
            <QRcode width="40" class="title-cion" />
            快速通關
        </tour-title>
        <section class="qrcode-wrap">
            <div class="qrcode" v-for="facility in tableData" :key="facility.id">
                <!-- <img src="@/components/TouristBackstage/Element/img/QRcode1.png" alt=""> -->
                <img :src="imgURL(facility.qrcode)" />
                <h1>
                    {{ facility.name }}
                </h1>
            </div>
        </section>
        <btn class="btn"
                width="150" 
                button-text-color="white"
                button-color="#D1825B">
                下載圖片
                <el-icon class="icon" color="black" size="20px"><Bottom /></el-icon>
                </btn>
                
    </div>
    
</template>

<style lang="scss" scoped>
    //te
    .icon {margin-left: 10px;}

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
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        flex-wrap: wrap;

        .qrcode {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;    
            margin: 3%;

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