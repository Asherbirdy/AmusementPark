<template>
    <div v-for="(product, index) in  productTitle " :key="index">
        <div class="titleS1">
            <title-s1 class="s1" v-if="product.classes === 's1'">
                <h3>{{ product.name }}</h3>
            </title-s1>
            <title-s2 class="s2" v-if="product.classes === 's2'">
                <h3>{{ product.name }}</h3>
            </title-s2>
        </div>
        <ul class="frame_yellow">
            <li v-for="item in clothes" :key="item.id" v-if="product.name === '衣服'">
                <frame-blue>
                    <img :src="imgURL(item.url)" alt="">
                    <p class="product_name"> {{ item.name }}</p>
                    <p class="product_price"> NT.{{ item.price }}</p>
                    <Button class="button" @click="open_Modal(item)">加入購物車</Button>
                </frame-blue>
            </li>
            <li v-for="item in cap" :key="item.id" v-if="product.name === '帽子'">
                <frame-yellow>
                    <img :src="imgURL(item.url)" alt="">
                    <p class="product_name"> {{ item.name }}</p>
                    <p class="product_price"> NT.{{ item.price }}</p>
                    <Button class="button" @click="open_Modal(item)">加入購物車</Button>
                </frame-yellow>
            </li>
            <li v-for="item in bag" :key="item.id" v-if="product.name === '帆布袋'">
                <frame-pink>
                    <img :src="imgURL(item.url)" alt="">
                    <p class="product_name"> {{ item.name }}</p>
                    <p class="product_price"> NT.{{ item.price }}</p>
                    <Button class="button" @click="open_Modal(item)">加入購物車</Button>
                </frame-pink>
            </li>
            <li v-for="item in phoneCase" :key="item.id" v-if="product.name === '手機殼'">
                <frame-green>
                    <img :src="imgURL(item.url)" alt="">
                    <p class="product_name"> {{ item.name }}</p>
                    <p class="product_price"> NT.{{ item.price }}</p>
                    <Button class="button" @click="open_Modal(item)">加入購物車</Button>
                </frame-green>
            </li>
            <!-- <li v-for="item in getProduct(product.name1)" :key="item.id">
                <frame-blue>
                    <img :src="imgURL(item.url)" alt="">
                    <p class="product_name"> {{ item.name }}</p>
                    <p class="product_price"> NT.{{ item.price }}</p>
                    <Button class="button" @click="open_Modal(item)">加入購物車</Button>
                </frame-blue>
            </li> -->
        </ul>

        <cartadd @close-modal="closeModal" v-if="isopen" :item="isopen" :productData="productData" />
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import getImageUrl from '@/utils/imgPath';

const props = defineProps({
    productData: {
        type: Array,
        required: true
    }
});

// 跑四個商品框
const productTitle = reactive([
    { name: '衣服', name1: 'clothes', classes: 's1' }, { name: '帽子', name1: 'cap', classes: 's2' }, { name: '帆布袋', name1: 'bag', classes: 's1' }, { name: '手機殼', name1: 'phoneCase', classes: 's2' }
]);

const imgURL = name => getImageUrl(name);



// 篩選資料函式
function filterA(keyword) {
    const clothes_blank = [];
    props.productData.forEach(product => {
        if (product.name.includes(keyword) && !clothes_blank.some(item => item.name === product.name)) {
            clothes_blank.push(product);
        }
    });
    return clothes_blank
}
// li迴圈
// function getProduct(name) {
//      switch (name) {
//         case "clothes":
//             return "clothes"
//         case "bag":
//             return "bag";
//         case "cap":
//             return "cap";
//         case "phoneCase":
//             return "phoneCase";
//         default:
//             return "";
//     }
// }


const clothes = computed(() => {
    return filterA('上衣')
})

const cap = computed(() => {
    return filterA('帽子')
})

const bag = computed(() => {
    return filterA('帆布袋')
})
const phoneCase = computed(() => {
    return filterA('手機殼')
})

// 彈窗開關
let isopen = ref(false);

// const openModal = () => {
//     emit(ridemodal.value = true);

// };
const closeModal = (item) => {
    isopen.value = false
};

const open_Modal = (item) => {
    isopen.value = item
    // console.log(item);
};


</script>
<style lang="scss" scoped>
.s2 {
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
        margin-bottom: 180px;
    }
}

img {
    width: 55%;
    margin: 155px 0 0 75px;
}

.product_name {
    font-size: 24px;
    margin-top: 110px;
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
}
</style>