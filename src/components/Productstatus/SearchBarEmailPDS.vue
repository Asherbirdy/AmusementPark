<template>
  <el-row class="demo-autocomplete">
    <el-col :span="12">
      <el-autocomplete
        v-model="state1"
        :fetch-suggestions="querySearch"
        clearable
        class="inline-input w-50"
        placeholder="輸入 email "
        @select="handleSelect"
      />
    </el-col>
  </el-row>
</template>

<script setup>
const state1 = ref('');

const restaurants = ref([]);
const querySearch = (queryString, cb) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value;
  // call callback function to return suggestions
  cb(results);
};
const createFilter = queryString => {
  return restaurant => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    );
  };
};
const loadAll = () => {
  return [
    { value: 'asher5elin', link: 'https://github.com/vuejs/vue' },
    { value: 'samuek34', link: 'https://github.com/ElemeFE/element' },
    { value: 'hupeon23', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'javasciprt3', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'hlle24', link: 'https://github.com/vuejs/vuex' },
    { value: 'aap', link: 'https://github.com/vuejs/vue-router' },
    { value: 'vueJS', link: 'https://github.com/babel/babel' },
  ];
};

const handleSelect = item => {
  console.log(item);
};

onMounted(() => {
  restaurants.value = loadAll();
});
</script>
