<script setup></script>
<template>
    <main>
        <div class="rides">
            <TitleBig_pink class="title" />
            <h1>主題特色</h1>
            <ul>
                <li>
                    <div>
                    <img src="@/assets/img/facility1.png" alt="">
                    <h3>
                        旋轉飛椅
                        <el-icon><ArrowDownBold /></el-icon>
                    </h3>
                    </div>
                </li>
                <li>
                    <div>
                    <img src="@/assets/img/facility2.png" alt="">
                    <h3>
                        雲霄飛車
                        <el-icon><ArrowDownBold /></el-icon>
                    </h3>
                    </div>
                </li>
                <li>
                    <div>
                    <img src="@/assets/img/facility3.png" alt="">
                    <h3>
                        摩天輪
                        <el-icon><ArrowDownBold /></el-icon>
                    </h3>
                    </div>
                </li>
                <li>
                    <div>
                    <img src="@/assets/img/facility4.png" alt="">
                    <h3>
                        探空飛梭
                        <el-icon><ArrowDownBold /></el-icon>
                    </h3>
                    </div>
                </li>
                <li>
                    <div>
                    <img src="@/assets/img/facility5.png" alt="">
                    <h3>
                        旋轉木馬
                        <el-icon><ArrowDownBold /></el-icon>
                    </h3>
                    </div>
                </li>
                <li>
                    <div>
                    <img src="@/assets/img/facility6.png" alt="">
                    <h3>
                        碰碰車
                        <el-icon><ArrowDownBold /></el-icon>
                    </h3>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>
<style lang="scss" scoped>
main {
    width: $workspace;
    padding-top: 0;
    .rides {
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
        .rides img{
            height: 250px;
            display: block;
        }
        .rides h3{
            font-size: 10px;
            color: #204C74;
            text-align: left;
            border: 1px solid #838383;
            padding: 10px 0;
            padding-left: 10px;
        }
        .rides ul{
            margin: 0 180px;
            display: flex;
            flex-wrap: wrap;
        }
        .rides li{
            margin: 40px 39px;
        }
        .rides li:nth-child(3) i{
            margin-left: 119px;
        }
        .rides li:nth-child(6) i{
            margin-left: 119px;
        }
        i{
            width: 15px;
            height: 15px;
            margin-left: 105px;
            color: #838383;
            border: 1px solid #838383;
            border-radius: 50%;
        }
}

</style>