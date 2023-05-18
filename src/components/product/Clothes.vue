<template>
    <div class="titleS1">
        <title-s1 class="s1">
            <h3 id="clothes">衣服</h3>
        </title-s1>

    </div>
    <ul class="frame_blue">
        <li v-for="(item, index) in product" :key="item.productName">

            <frame-blue>
                <img :src="imgURL(item.image)" alt="">
                <p class="product_name"> {{ item.productName }}</p>
                <button>加入購物車</button>
            </frame-blue>
        </li>
    </ul>
</template>
<script setup>
import getImageUrl from '@/utils/imgPath';
const imgURL = name => getImageUrl(name);
const product = ref([
    {
        productName: '艾比怪獸上衣',
        image: 'Tshirt1.png',
    },
    {
        productName: 'Q摸怪獸上衣',
        image: "Tshirt2.png",
    },
    {
        productName: '奇樂怪獸上衣',
        image: "Tshirt3.png",
    },
    {
        productName: 'MONSTAR上衣',
        image: "Tshirt4.png",
    },
    {
        productName: '戴蒙怪獸上衣',
        image: "Tshirt5.png",
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

.s1 {
    padding: 0 0 0 100px;
}

.frame_blue {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
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
    width: 70%;
    margin: 90px 0 0 30px;
}

.product_name {
    font-size: 18px;
    margin-top: 50px;
    margin-bottom: 15px;
    color: $textcolor7;
}
</style>