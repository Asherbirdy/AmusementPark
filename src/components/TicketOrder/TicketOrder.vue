<script setup></script>
<template>
  <div>
    <table>
      <tr>
        <th>票種</th>
        <th>適用對象</th>  
        <th>票價</th>
        <th>張數</th>
        <th>快速通關</th>
      </tr>
      <tr>
        <td>全票</td>        
        <td class="ex">一般成人，身高110cm以上視為成人</td>
        <td>NT.500</td>
        <td>
          <el-input-number 
            v-model="num" width:10px
            :min="0"
            @change="handleChange" class="count"
          /></td>
          <td><input type="checkbox"></td>
      </tr>
      <tr>
        <td>學生票</td>        
        <td class="ex">入園需持當學期註冊學生證之學生(限本人使用)</td>
        <td>NT.400</td>
        <td>
          <el-input-number 
            v-model="num" width:10px
            :min="0"
            @change="handleChange" class="count"
          /></td>
          <td><input type="checkbox"></td>
      </tr>
      <tr>
        <td>兒童票</td>       
        <td class="ex">4歲~12歲，身高未滿110cm兒童</td>
        <td>NT.250</td>
        <td>
          <el-input-number 
            v-model="num" width:10px
            :min="0"
            @change="handleChange" class="count"
          /></td>
          <td><input type="checkbox"></td>
      </tr>
      <tr>
        <td>優待票</td>        
        <td class="ex">持有身心障礙證明者與1位陪同者、孕婦、65歲以上長者</td>
        <td>NT.200</td>
        <td>
          <el-input-number 
            v-model="num" width:10px
            :min="0"
            @change="handleChange" class="count"
          /></td>
          <td><input type="checkbox"></td>
      </tr>
      <tr><td colspan="10" class="ex">4歲以下免費入場</td></tr>
    </table>
    
  </div>
</template>

<!-- <script>
export default {
  name: 'MyComponent',
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    handleChange(value) {
      console.log(value)
    },
  },
}
</script> -->
<style lang="scss" scoped>
table,th,td {
  border: 2px solid #d1825b;
  
}

th,td {
  padding: 8px;
}
table{
  margin: 0 auto;
  // width: 1000px;

  tr {
    th {
      background-color: #d1825b;
      text-align: center;
      color: white;
      font-size: 24px;
    }

    td {
      background-color: #f9f3e4;
      text-align-last: center;
      font-size: 24px;
    }
    .ex{
      text-align-last: left;
    }
  }
}

</style>
