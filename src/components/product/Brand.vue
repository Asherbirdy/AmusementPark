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
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Samsuang' },
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