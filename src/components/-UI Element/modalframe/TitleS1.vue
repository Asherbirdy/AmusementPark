
<template>
  <main>
    <p>
      <slot>

      </slot>
    </p>
    <title-small1 />
  </main>
</template>

<script >

</script>


<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0;

  p {
    position: absolute;
  }
}
</style>


