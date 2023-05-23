<script setup>
const goTop = () => {
    window.scrollTo({ top: 0 });
}
</script>
<template>
    <footer>
        <SVGFooter class="SVGFooter" />
        <div class="footer_bgc">
            <main>
                <div class="monstar">
                    <h1>怪奇遊樂園
                        <logo class="logo" />
                    </h1>
                    <hr>
                    <p>台北市士林區承德路五段55號</p>
                    <p>TEL (02)1234-5678</p>
                    <div class="media">
                        <SVGYoutube class="yt" />
                        <SVGFacebook class="fb" />
                        <SVGInstagram />
                    </div>

                    <p class="copyright">Copyright © 2023 Monster. All rights reserved</p>
                </div>
                <div class="list">
                    <ul>
                        <router-link class="routerlink" to="/create">
                            <li @click="goTop">喬裝打扮</li>
                        </router-link>
                        <li>寵物蛋養成系統</li>
                    </ul>
                    <ul>
                        <router-link class="routerlink" to="map">
                            <li @click="goTop">怪獸領地</li>
                        </router-link>
                        <li>園區地圖</li>
                        <li>園區動態</li>
                    </ul>
                    <ul>
                        <router-link class="routerlink" to="/notice">
                            <li @click="goTop">領地須知</li>
                        </router-link>

                        <li>關於我們</li>
                        <li>主題特色</li>
                        <li>展場資訊</li>
                        <li>交通資訊</li>
                    </ul>
                    <ul>
                        <router-link class="routerlink" to="/shop">
                            <li @click="goTop">走私商人</li>
                        </router-link>
                        <li>所有商品</li>
                        <li>手機殼</li>
                        <li>帆布袋</li>
                        <li>衣服</li>
                        <li>帽子</li>
                        <li>客製化專區</li>
                    </ul>
                    <ul>
                        <router-link class="routerlink" to="/admin/touristmember">
                            <li @click="goTop">冒險者專區</li>
                        </router-link>
                        <li>會員資料</li>
                        <li>線上預約&購票</li>
                        <li>快速通關&購票紀錄</li>
                        <li>我的訂單</li>
                    </ul>
                </div>
            </main>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.routerlink {
    text-decoration-line: none;
}

footer{
    margin-top: 200px;
}
.footer_bgc {
    background-color: $maincolor2;
}

main {
    padding: 20px 0;
    display: flex;
    background-color: $maincolor2;
}

.SVGFooter {
    width: 100%;
    display: block;
    height: auto;
}

.footerMain {
    background-color: $maincolor2;
    width: 100%;
    height: 280px;
}

.monstar {
    width: 30%;
    top: -20px;
    position: relative;
}

.list {
    width: 70%;
    display: flex;
    justify-content: space-around;
}

h1 {
    display: inline-block;
    text-align: center;
    background: linear-gradient(to right, #5590D6, #E27362);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.logo {
    width: 20%;
    height: 20%;
    padding-left: 10px;
}

hr {
    border: 1px solid #C0590E;
    margin: 10px 0;
}

p {
    color: #C0590E;
    text-align: center;
}

.media {
    text-align: center;
    margin: 10px 0;
}

.yt {
    border-radius: 11px;
}

.fb {
    margin: 0 20px;
}

ul li:first-child {
    color: #C0590E;
    font-size: 20px;
    font-weight: bold;
}

li {
    color: #D1825B;
    margin-bottom: 10px;
}
</style>