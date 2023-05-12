<template lang="">
  <div>
    <table>
      <tr>
        <th>票種</th>
        <th>票價</th>
        <th>適用對象</th>
      </tr>
      <tr>
        <td>成人票</td>
        <td>NT$500</td>
        <td>限18歲(含)以上成人使用</td>
      </tr>
      <tr>
        <td>學生票</td>
        <td>NT$400</td>
        <td>限12歲(含)以上持學生證之學生適用</td>
      </tr>
      <tr>
        <td>兒童票</td>
        <td>NT$250</td>
        <td>限4歲(含)以上及未滿12歲兒童適用</td>
      </tr>
      <tr>
        <td>優惠票</td>
        <td>NT$250</td>
        <td>限持有身心障礙證明者與1位陪同者、孕婦、滿65歲以上長者適用</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
table,
th,
td {
  border: 1px solid black;
}

th,
td {
  padding: 8px;
}

tr {
  th {
    background-color: #d1825b;
    text-align: center;
    color: white;
    font-size: 24px;
  }

  td {
    background-color: #f9f3e4;
    text-align-last: left;
    font-size: 24px;
  }
}

.title {
}
</style>
