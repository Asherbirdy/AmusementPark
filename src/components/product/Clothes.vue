<template>
    <div class="titleS1">
        <title-s1 class="s1">
            <h3>衣服</h3>
        </title-s1>

    </div>
    <ul class="frame_blue">
        <li v-for="item in clothes" :key="item.id">
            <frame-blue>
                <img :src="imgURL(item.url)" alt="">

                <p class="product_name"> {{ item.name }}</p>
                <p class="product_price"> NT.{{ item.price }}</p>
                <Button class="button" @click="closeModal">加入購物車</Button>
            </frame-blue>
        </li>
    </ul>

    <cartadd :class="{ modal: isopen }" @close-modal="closeModal" />
    <!-- :class="{modal:ridemodal}"  -->
</template>
<script setup>
import getImageUrl from '@/utils/imgPath';
import { reactive, ref, watch } from 'vue';
const imgURL = name => getImageUrl(name);



const isopen = ref(true);
// 彈窗開關
const openModal = () => {
    emit(ridemodal.value = true);
    // console.log(ridemodal.value)
};
const closeModal = () => {
    isopen.value = !isopen.value;
};
const props = defineProps({
    productData: {
        type: Array,
        required: true
    }
});
// const clothes_blank = reactive([]);

const keyword = '上衣'; // 要搜尋的關鍵字

const clothes = computed(() => {

    // if (product.name.includes(keyword) && !clothes.some(item => item.name === product.name)) {
    //     clothes_blank.push(product);
    // }
    const clothes_blank = []

    props.productData.forEach(product => {
        if (product.name.includes(keyword) && !clothes_blank.some(item => item.name === product.name)) {
            clothes_blank.push(product);
        }
    });


    //  const new_array = props.productData.filter((item) =>{
    //     return product.name.includes(keyword) && !clothes.some(item => item.name === product.name)
    // })

    return clothes_blank
})

// onMounted(() => {
//     setTimeout(() => {
//         props.productData.forEach(product => {
//             if (product.name.includes(keyword) && !clothes.some(item => item.name === product.name)) {
//                 clothes.push(product);
//             }
//         });
//     }, 50)

// });


</script>
<style lang="scss" scoped>
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
        margin-bottom: 180px;
    }
}



img {
    width: 70%;
    margin: 135px 0 0 50px;
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

    .frame_blue {
        padding-left: 180px;
    }

    .frame {
        width: 300px;
        height: 400px;
    }
}
</style>