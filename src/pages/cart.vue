<template>
  <cart-inside />
</template>
<style lang="scss" scoped>
main {
  margin-bottom: 100px;
}

//購物車步驟
article {
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;

  .CartStep {
    display: flex;
    align-items: center;

    .monster {
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        margin-top: 20px;
        color: #163767;
      }
    }

    .hrNone {
      color: white;
    }
  }
}</style>
