<script setup></script>
<template>
    <main>
        <div class="exhi">
        <TitleBig_yellow class="title" />
        <h1>展覽特色</h1>
            <ul>
                <li>
                    <img src="@/assets/img/performance4.png" />
                    <h3>火焰跳躍者</h3>
                </li>
                <li>
                    <img src="@/assets/img/performance5.png" />
                    <h3>魔幻舞台</h3>
                </li>
                <li>
                    <img src="@/assets/img/performance6.png" />
                    <h3>夢幻演繹</h3>
                </li>
            </ul>
         </div>
    </main>
</template>
<style lang="scss" scoped>
main {
    width: $workspace;
    .exhi {
        width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    .title{
            margin: 0 350px;
        }
    h1{
        position: absolute;
        top: 176px;
        left: 511px;
        color: #CE5B5B;
        font-size: 50px;
    }
    
        .exhi ul{
            margin: 75px 50px;
            display: flex;
        }
        .exhi li{
            padding-left: 55px;
        }
        .exhi li:nth-child(1){
            transform: rotateY(54deg)
        }
        .exhi li:nth-child(3){
            transform: rotateY(-54deg)
        }
        .exhi img{
            display: block;
            margin-bottom: 30px;
        }
        .exhi h3{
            text-align: center;
        }
}

</style>