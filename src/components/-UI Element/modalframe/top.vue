<template>
        <div v-if="showButton" class="bottom">
            <el-icon class="top" @click="scrollToTop">
                <ArrowUpBold />
            </el-icon>
            <QAmonster class="QA" />
        </div>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const handleScroll = () => {
    showButton.value = window.scrollY > 0;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
  
<style>
.bottom {
    display: flex;
    flex-wrap: wrap;
}

.top {
    font-size: 50px;
    color: #163767;
    right: 51px;
    bottom: 150px;
    position: fixed;
}

.QA {
    right: 20px;
    bottom: 20px;
    position: fixed;
}</style>