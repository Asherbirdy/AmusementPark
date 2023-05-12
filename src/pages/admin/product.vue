<template>
    <div class="mainbox">
        <div class="navbar">
            <ul>
                <li class="bar">所有商品</li>
                <hr>
                <li class="bar">衣服</li>
                <hr>
                <li class="bar">帽子</li>
                <hr>
                <li class="bar">帆布袋</li>
                <hr>
                <li class="bar">手機殼</li>
                <hr>
                <li class="bar">客製化商品</li>
                <hr>
            </ul>
        </div>
        <main>
            <ul class="frameBlue">
                <li class="content" v-for="(item, index) in product" :key="item.productName">

                    <frame-blue>
                        <img :src="item.image" alt="">
                        <p class="productName"> {{ item.productName }}</p>
<button>加入購物車</button>
                    </frame-blue>
                </li>
            </ul>
        </main>
    </div>
</template>
<script setup>

const product = ref([
    {
        productName: '艾比怪獸上衣',
        image: "/product/Tshirt1.png",
    },
    {
        productName: 'Q摸怪獸上衣',
        image: "/product/Tshirt2.png",
    },
    {
        productName: '奇樂怪獸上衣',
        image: "/product/Tshirt3.png",
    },
    {
        productName: 'MONSTAR上衣',
        image: "/product/Tshirt2.png",
    },
    {
        productName: '戴蒙怪獸上衣',
        image: "/product/Tshirt3.png",
    }

]);
</script>
<style lang="scss" scoped>
.mainbox {
    display: flex;

}

.navbar {
    width: 180px;
    display: inline-block;
    padding: 30px;
}

.bar {
    color: $textcolor6;
    padding: 10px;

}

hr {
    border-bottom: 3px dashed #D1825B;
}

main {
    padding-top: 0;
}

.frameBlue {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding-left: 60px;
}

.content {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 0;
    padding: 20px;
    margin-bottom: 110px;

}

img {
    width: 70%;
    margin: 90px auto 0;
}

.productName{
    font-size: 20px;
    margin-top: 45px;
}
</style>