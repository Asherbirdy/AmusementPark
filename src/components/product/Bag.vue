<template>
    <div class="titleS1">
        <title-s1 class="s1">
            <h3>帆布袋</h3>
        </title-s1>

    </div>
    <ul class="frame_pink">
        <li v-for="item in bag" :key="item.id">

            <frame-pink>
                <img :src="imgURL(item.url)" alt="">
                <p class="product_name"> {{ item.name }}</p>
                <p class="product_price"> NT.{{ item.price }}</p>
                <Button class="button" @click="closeModal">加入購物車</Button>
            </frame-pink>
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
const bag = reactive([]);

const keyword = '帆布袋'; // 要搜尋的關鍵字

onMounted(() => {
    setTimeout(() => {
        props.productData.forEach(product => {
            if (product.name.includes(keyword) && !bag.some(item => item.name === product.name)) {
                bag.push(product);
            }
        });
    }, 50)

});
</script>
<style lang="scss" scoped>
.s1{
    padding-top: 50px;
}
.titleS1 {
    display: inline-block;
    position: relative;
    padding-top: 20px;

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
        margin-bottom: 180px;
    }
}

img {
    width: 70%;
    margin: 130px 0 0 50px;
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
    main.s1 {
        padding-left: 80px;
    }

    .frame_pink {
        padding-left: 180px;
    }

    .frame {
        width: 300px;
        height: 400px;
    }
}
</style>