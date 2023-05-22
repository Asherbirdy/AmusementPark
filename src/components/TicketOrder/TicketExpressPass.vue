<script setup>
</script>
<template>
<div id="express">
    <table>
        <tr>
            <th colspan="4">快速通關　(如多票需購買不同的快速通關，請選單票分別追加)</th>
        </tr>
        <tr>
            <td><label><input type="checkbox" name="ride1" value="jetcoaster">　雲霄飛車</label></td>
            <td><label><input type="checkbox" name="ride2" value="y">　海盜船</label></td>
            <td><label><input type="checkbox" name="ride3" value="r">　激流勇進</label></td>
            <td><label><input type="checkbox" name="ride4" value="g">　自由落體</label></td>
        </tr>
        <tr>
            <td><label><input type="checkbox" name="ride1" value="jetcoaster">　怪奇城列車</label></td>
            <td><label><input type="checkbox" name="ride2" value="y">　地心歷險</label></td>
            <td><label><input type="checkbox" name="ride3" value="r">　直闖樹冠層</label></td>
            <td></td>
        </tr>
    </table>
    
</div>
</template>

<style scoped lang="scss">
#express{
    margin: 40px auto;
}

table,th,td {
      border: 2px solid #d1825b;
}

th,td {
    padding: 8px;
}

table{
    margin: 0 auto;
    width: 1000px;        
    font-size: 24px;
    tr {
        th {
        background-color: #d1825b;
        text-align: center;
        color: white;

        }

        td {
        background-color: #f9f3e4;
        text-align-last: left;
        }
    }
}
input{
    width: 20px;
    height: 20px;
}

</style>
