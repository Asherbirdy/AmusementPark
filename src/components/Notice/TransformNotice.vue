<script setup></script>
<template>
    <main>
        <div class="trans">
            <title-big-pink class="title" />
            <h1>交通資訊</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.136653697438!2d121.5101873967896!3d25.0972351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aebf5a86da1b%3A0x5f56dfe454975847!2z6Ie65YyX5biC56uL5YWS56ul5paw5qiC5ZyS!5e0!3m2!1szh-TW!2stw!4v1683384751986!5m2!1szh-TW!2stw" width="1000" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <logo class="logo"/>
            <ul>
                <li>
                    <SvgCar class="car"/>
                    <h3>國道一號</h3>
                    <p>臺北(重慶北路)交流道→百齡橋→承德路→基河路→兒童新樂園</p>
                </li>
                <li>
                    <SvgSubway class="sub"/>
                    <h3>捷運士林站</h3>
                    <p>搭乘至臺北車站轉捷運淡水信義線至劍潭站、士林站或芝山站轉乘公車</p>
                </li>
                <li>
                    <SvgBus class="bus" />
                    <h3>捷運士林站</h3>
                    <p>出口1→公車轉乘站255區、紅30、620、兒樂１號線(平日停駛)→兒童新樂園</p>
                </li>
            </ul>
        </div>
    </main>
</template>
<style lang="scss" scoped>
main {
    width: $workspace;
    padding-top: 0;
    .trans {
        width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    .title{
            margin: 0 350px;
        }
        h1{
            position: absolute;
            top: 135px;
            left: 521px;
            color: #CE5B5B;
            font-size: 50px;
        }
    .logo{
        position: absolute;
        width: 300px;
        top: 1420px;
        left: 920px;
    }
    .trans iframe{
        margin: 20px 100px 25px;
    }

    .trans h3{
        font-size: 30px;
        text-align: center;
        color: #163767;
        padding-top: 50px;
        padding-bottom: 25px;
    }
    .trans p{
        font-size: 26px;
        width: 310px;
        margin: 0 auto;
        text-align: center;
        color: #5590D6;
        position: relative;
    }
    .trans ul{
        position: relative;
    }
    .trans .car{
        position: absolute;
        top: 120px;
        left: 200px;
    }
    .trans .sub{
        position: absolute;
        top: 340px;
        left: 200px;
    }
    .trans .bus{
        position: absolute;
        top: 560px;
        left: 200px;
    }
    .trans p::before{
        content: "";
        position: absolute;
        top: 125px;
        right: -83px;
        width: 500px;
        height: 3px;
        background-color: #D1825B;
    }
    .trans p::after{
        content: "";
        position: absolute;
        top: 117px;
        right: -85px;
        width: 24px;
        height: 3px;
        rotate: 39deg;
        background-color: #D1825B;
    }
}

</style>