<template>
    <div v-for="(product, index) in  productTitle " :key="index" :id="product.id">
        <div class="titleS1">
            <title-s1 class="s1" v-if="product.classes === 's1'">
                <h3>{{ product.name }}</h3>
            </title-s1>
            <title-s2 class="s2" v-if="product.classes === 's2'">
                <h3>{{ product.name }}</h3>
            </title-s2>
        </div>
        <ul class="frames">
            <li v-for="item in product.name1" :key="item.id">
                <FrameAll :class="product.components">
                    <img :src="imgURL(item.url)" alt="">
                    <p class="product_name"> {{ item.name }}</p>
                    <p class="product_price"> NT.{{ item.price }}</p>
                    <Button class="button" @click="open_Modal(item)">加入購物車</Button> 
                </FrameAll>
            </li>
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
// 跑四個商品框
const productTitle = reactive([
    { name: '衣服', name1: clothes, classes: 's1', id: "section1", components: 'frame-blue'}, { name: '帽子', name1: cap, classes: 's2', id: "section2", components: 'frame-yellow' }, { name: '帆布袋', name1: bag, classes: 's1', id: "section3", components: 'frame-pink' }, { name: '手機殼', name1: phoneCase, classes: 's2', id: "section4", components: 'frame-green' }
]);

const imgURL = name => getImageUrl(name);

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
.titleS1 {
    display: inline-block;
    position: relative;
    padding-top: 20px;

    .s1 {
        h3 {
            margin: 8px -15px 0 0;
            color: $textcolor7;
            letter-spacing: 0.3em;
            position: absolute;
        }
    }

    .s2 {
        padding-top: 50px;

        h3 {
            margin: 8px 18px 0 0;
            color: $textcolor7;
            letter-spacing: 0.3em;
            position: absolute;
        }
    }


}


.frames {
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

        .frame {
            position: relative;
        }
    }
}

img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -35%);
}

.product_name {
    font-size: 24px;
    margin-top: 135%;
    color: $textcolor7;
    // position: relative;
    // top: 100%;
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