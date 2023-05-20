<template>
    <select v-model="selected">
        <option v-for="item in items" :value="item.id">{{ item.name }}</option>
    </select>
</template>
  
<script>
import { ref } from 'vue';

export default {
    setup() {
        const items = ref([
            { id: 1, name: 'iPhone 14 ' },
            { id: 2, name: 'iPhone 14 Plus' },
            { id: 3, name: 'iPhone 14 Pro' },
            { id: 4, name: 'iPhone 14 Pro Max ' },
            { id: 5, name: 'iPhone 13 ' },
            { id: 6, name: 'iPhone 13 mini' },
            { id: 7, name: 'iPhone 13 Pro' },
            { id: 8, name: 'iPhone 13 Pro Max ' },
            { id: 5, name: 'iPhone 12 ' },
            { id: 6, name: 'iPhone 12 mini' },
            { id: 7, name: 'iPhone 12 Pro' },
            { id: 8, name: 'iPhone 12 Pro Max ' },
            { id: 9, name: 'iPhone 11' },
            { id: 10, name: 'iPhone 11 Pro' },
            { id: 11, name: 'iPhone 11 Pro Max ' },
        ],
            [{ id: 12, name: 'Galaxy S23 Ultra ' },
            { id: 13, name: 'Galaxy S23+' },
            { id: 14, name: 'Galaxy S23' },
            { id: 15, name: 'Galaxy S22 Ultra' },
            { id: 16, name: 'Galaxy S22+' },
            { id: 17, name: 'Galaxy S22' },
            { id: 18, name: 'Galaxy S21 FE 5G' },
            { id: 19, name: 'Galaxy S21 Ultra 5G' },
            { id: 20, name: 'Galaxy S21+ 5G' },
            { id: 21, name: 'Galaxy S21 5G' },
            { id: 22, name: 'Galaxy S20 FE 5G' },
            { id: 23, name: 'Galaxy S20 Ultra 5G' },
            { id: 24, name: 'iGalaxy S20+ 5G' },
            ]);

        const selected = ref(1);

        return {
            items,
            selected,
        };
    },
};
</script>

<style lang="scss" scoped>
select {
    font-size: 14px;
}
</style>
  