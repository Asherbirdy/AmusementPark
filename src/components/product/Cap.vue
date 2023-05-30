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
                <Button class="button" @click="closeModal">加入購物車</Button>
            </frame-yellow>
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
    width: 55%;
    margin: 155px 0 0 75px;
}

.product_name {
    font-size: 24px;
    margin-top: 110px;
    margin-bottom: 15px;
    color: $textcolor7;
}

Button {
    font-size: 20px;
    width: 140px;
    height: 50px;
    border-radius: 10px;
}
.modal {
    visibility: hidden;
}

@media screen and (max-width: 1280px) {
    main.s2 {
        padding-left: 80px;
    }

    .frame_yellow {
        padding-left: 180px;
    }

    .frame {
        width: 300px;
        height: 400px;
    }
}</style>