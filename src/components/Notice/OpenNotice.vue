<script setup></script>
<template>
    <main>
        <div class="open">
         <TitleMain class="title"><slot>營業時間</slot></TitleMain>
        <div class="table">
            <ul class="row1">
            <li>週日~週五</li>
            <li>09:00-18:00</li>
            </ul>
            <ul class="row2">
            <li>週六</li>
            <li>09:00-20:00</li>
        </ul> 
            <h3>最終入場時間為閉館前1小時，實際營業狀況請依官方公告為主。</h3>
        </div>
        <img src="@/assets/img/castle.png" alt="">
    </div>
    </main>
</template>
<style lang="scss" scoped>
main {
    width: $workspace;
    padding-top: 50px;
    .open {
        width: 1200px;
        margin: 40px auto 800px;
        position: relative;
        }
        .table {
            width: 600px;
            margin-top: 130px;
            text-align: center;
            position: absolute;
            top: 300px;
            left: 265px;
        }
        .row1 {
            text-align: center;
            font-weight: bold;
            display: flex;
            flex-direction: row;
        }
        .row2 {
            text-align: center;
            font-weight: bold;
            display: flex;
            flex-direction: row;
            margin-bottom: 70px;
        }
        .row1 li:nth-child(1) {
            background-color: #d1825b;
            padding: 25px 50px;
            border-bottom: 1px solid #f9f3e4;
        }
        .row2 li:nth-child(1) {
            background-color: #d1825b;
            padding: 25px 72px;
        }
        .row1 li:nth-child(2) {
            background-color: #f9f3e4;
            padding: 25px 50px;
            border-bottom: 1px solid #d1825b;
        }
        .row2 li:nth-child(2) {
            background-color: #f9f3e4;
            padding: 25px 50px;
        }
        .open h3 {
            font-size: 16px;
            position: absolute;
            top: 193px;
            left: -40px;
        }
        .open img {
            position: absolute;
            margin-top: 125px;
            top: 120px;
            left: 710px;
            width: 385px;
            display: block;
        }
}

</style>