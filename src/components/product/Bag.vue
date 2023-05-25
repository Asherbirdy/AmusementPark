<template>
    <div class="titleS1">
        <title-s1 class="s1">
            <h3>帆布袋</h3>
        </title-s1>

    </div>
    <ul class="frame_pink">
        <li v-for="(item, index) in product" :key="item.productName">

            <frame-pink>
                <img :src="imgURL(item.image)" alt="">
                <p class="product_name"> {{ item.productName }}</p>
                <Button>加入購物車</Button>
            </frame-pink>
        </li>
    </ul>
</template>
<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);
const product = ref([
    {
        productName: '奇樂怪獸帆布袋',
        image: 'bag1.png',
    },
    {
        productName: 'MONSTAR帆布袋',
        image: "bag2.png",
    },
    {
        productName: 'Q呆怪獸帆布袋',
        image: "bag3.png",
    },
    {
        productName: '火寶怪獸帆布袋',
        image: "bag4.png",
    },
    {
        productName: '水寶怪獸帆布袋',
        image: "bag5.png",
    }

]);
</script>
<style lang="scss" scoped>
.titleS1 {
    display: inline-block;
    position: relative;
    padding: 20px 0 0 35px;

    h3 {
        margin: 10px 0 0 20px;
        color: $textcolor7;
        letter-spacing: 0.3em;
    }
}

.frame_pink {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding-left: 30px;

    li {
        display: flex;
        flex-wrap: wrap;
        flex-basis: 0;
        padding: 20px;
        margin-bottom: 110px;
    }
}

img {
    width: 70%;
    margin: 130px 0 0 50px;
}

.product_name {
    font-size: 24px;
    margin-top: 80px;
    margin-bottom: 15px;
    color: $textcolor7;
}

Button{
    font-size: 20px;
    width: 140px;
    height: 50px;
    border-radius: 10px;
}
@media screen and (max-width: 1280px) {
    main.s1{
        padding-left: 80px;
    }
    .frame_pink{
        padding-left: 180px;
    }
    .frame{
        width: 300px;
        height: 400px;
    }
}
</style>