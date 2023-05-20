<template>
    <div class="titleS1">
        <title-s2 class="s2">
            <h3>帽子</h3>
        </title-s2>

    </div>
    <ul class="frame_yellow">
        <li v-for="(item, index) in product" :key="item.productName">

            <frame-yellow>
                <img :src="imgURL(item.image)" alt="">
                <p class="product_name"> {{ item.productName }}</p>
                <Button>加入購物車</Button>
            </frame-yellow>
        </li>
    </ul>
</template>
<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);
const product = ref([
    {
        productName: '火寶怪獸帽子',
        image: 'cap1.png',
    },
    {
        productName: 'MONSTAR帽子',
        image: "cap2.png",
    },
    {
        productName: 'Q呆怪獸帽子',
        image: "cap3.png",
    },
    {
        productName: '水寶怪獸帽子',
        image: "cap4.png",
    },
    {
        productName: '奇樂怪獸帽子',
        image: "cap5.png",
    }

]);
</script>
<style lang="scss" scoped>
.titleS1 {
    display: inline-block;
    position: relative;
    padding: 20px 0 0 35px;

    .s2 {
        padding: 0 0 0 100px;
    }

    h3 {
        margin: 8px 18px 0 0;
        color: $textcolor7;
        letter-spacing: 0.3em;
    }
}


.frame_yellow {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding-left: 60px;
    padding-left: 200px;

    li {
        display: flex;
        flex-wrap: wrap;
        flex-basis: 0;
        padding: 20px;
        margin-bottom: 110px;
    }
}

img {
    width: 55%;
    margin: 105px 0 0 52px;
}

.product_name {
    font-size: 18px;
    margin-top: 75px;
    margin-bottom: 15px;
    color: $textcolor7;
}
</style>