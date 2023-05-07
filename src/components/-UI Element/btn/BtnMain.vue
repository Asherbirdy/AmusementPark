<template>
  <button
    :style="{ color: internalTextColor, backgroundColor: internalButtonColor }"
    @mouseover="internalButtonColor = internalButtonHoverColor"
    @mouseleave="internalButtonColor = this.buttonColor"
  >
    <slot>預設a</slot>
  </button>
</template>
<script>
export default {
  props: {
    buttonTextColor: {
      type: String,
      defult: 'white',
    },
    buttonColor: {
      type: String,
      defult: '#d1825b',
    },
    buttonHoverColor: {
      type: String,
      defult: '#ffa07a',
    },
  },
  data() {
    return {
      internalTextColor: this.buttonTextColor,
      internalButtonColor: this.buttonColor,
      internalButtonHoverColor: this.buttonHoverColor,
    };
  },
};
</script>
<style lang="scss">
button {
  display: inline-block;
  background-color: #c0590e;
  padding: 10px 20px;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
}
</style>
