<template>
    <div class="titleS1">
        <title-s2 class="s2">
            <h3>手機殼</h3>
        </title-s2>

    </div>
    <ul class="frame_green">
        <li v-for="(item, index) in product" :key="item.productName">

            <frame-green>
                <img :src="imgURL(item.image)" alt="">
                <p class="product_name"> {{ item.productName }}</p>
                <Button class="button" @click="closeModal">加入購物車</Button>
            </frame-green>
        </li>
    </ul>
    <cartadd :class="{ modal: isopen }" @close-modal="closeModal" />
</template>
<script setup>
import getImageUrl from '@/utils/imgPath';
let isopen = ref(true);
// 彈窗開關
const openModal = () => {
    emit(ridemodal.value = true);
    // console.log(ridemodal.value)
};
const closeModal = () => {
    isopen.value = !isopen.value;
};
const imgURL = name => getImageUrl(name);
const product = ref([
    {
        productName: '火寶怪獸手機殼',
        image: 'phoneCase1.png',
    },
    {
        productName: 'MONSTAR手機殼',
        image: "phoneCase2.png",
    },
    {
        productName: '奇樂怪獸手機殼',
        image: "phoneCase3.png",
    },
    {
        productName: '水寶怪獸手機殼',
        image: "phoneCase4.png",
    },
    {
        productName: '艾比怪獸手機殼',
        image: "phoneCase5.png",
    }

]);
</script>
<style lang="scss" scoped>
.titleS1 {
    display: inline-block;
    position: relative;
    padding: 20px 0 0 35px;


    h3 {
        margin: 8px 18px 0 0;
        color: $textcolor7;
        letter-spacing: 0.3em;
    }
}


.frame_green {
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
    width: 40%;
    margin: 135px 0 0 107px;
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
.modal {
    visibility: hidden;
}

@media screen and (max-width: 1280px) {
    main.s2{
        padding-left: 80px;
    }
    .frame_green{
        padding-left: 180px;
    }
    .frame{
        width: 300px;
        height: 400px;
    }
}
</style>