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
                <Button class="button" @click="isopen = !isopen">加入購物車</Button>
            </frame-blue>
        </li>
    </ul>


    <cartadd v-if="ridemodal" :class="{ modal: isopen }" @close-modal="closeModal" />
    <!-- :class="{modal:ridemodal}"  -->
</template>
<script setup>
import getImageUrl from '@/utils/imgPath';

let isopen = ref(true);
// 談窗開關
let ridemodal = ref(true);
const openModal = () => {
    emit(ridemodal.value = true);
    // console.log(ridemodal.value)
};
const closeModal = () => {
    ridemodal.value = false;
};
// const emit = defineEmits(['openModal', 'closeModal']);
const imgURL = name => getImageUrl(name);

// const props = defineProps(['open']);






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
    padding: 0px;
}

.frame_blue {
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
    margin: 135px 0 0 50px;
}

.product_name {
    font-size: 24px;
    margin-top: 80px;
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
</style>