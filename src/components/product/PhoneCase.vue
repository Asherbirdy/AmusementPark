<template>
    <div class="titleS1">
        <title-s2 class="s2">
            <h3>手機殼</h3>
        </title-s2>

    </div>
    <ul class="frame_green">
        <li v-for="item in phoneCase" :key="item.id">

            <frame-green>
                <img :src="imgURL(item.url)" alt="">
                <p class="product_name"> {{ item.name }}</p>
                <p class="product_price"> NT.{{ item.price }}</p>
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
const props = defineProps({
    productData: {
        type: Array,
        required: true
    }
});
const phoneCase = reactive([]);

const keyword = '手機殼'; // 要搜尋的關鍵字

onMounted(() => {
    setTimeout(() => {
        props.productData.forEach(product => {
            if (product.name.includes(keyword) && !phoneCase.some(item => item.name === product.name)) {
                phoneCase.push(product);
            }
        });
    }, 50)

});
</script>
<style lang="scss" scoped>
.s2{
    padding-top: 50px;
}
.titleS1 {
    display: inline-block;
    position: relative;
    padding-top: 20px;


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
        margin-bottom: 180px;
    }
}

img {
    width: 40%;
    margin: 135px 0 0 107px;
}

.product_name {
    font-size: 24px;
    margin-top: 80px;
    color: $textcolor7;
}

.product_price {
    font-size: 24px;
    margin: 15px 0;
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