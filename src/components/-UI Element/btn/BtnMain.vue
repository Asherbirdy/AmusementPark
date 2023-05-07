<template>
  <button
    :style="{ color: internalTextColor, backgroundColor: internalButtonColor }"
    @mouseover="internalButtonColor = internalHoverColor"
    @mouseleave="internalButtonColor = this.buttonColor"
  >
    <slot>預sdasdaas設</slot>
  </button>
</template>
<script>
export default {
  props: {
    buttonTextColor: {
      type: String,
      default: 'white',
    },
    buttonColor: {
      type: String,
      default: '#d1825b',
    },
    buttonHoverColor: {
      type: String,
      default: '#ffa07e',
    },
  },
  data() {
    return {
      internalTextColor: this.buttonTextColor,
      internalButtonColor: this.buttonColor,
      internalHoverColor: this.buttonHoverColor,
    };
  },
};
</script>
<style lang="scss">
button {
  display: inline-block;
  background-color: null;
  padding: 10px 20px;
  color: null;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
}
</style>
