<script setup>
const props = defineProps({
  //icon名稱
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
  },
  // 想要update成什麼顏色
  color: {
    type: String,
    default: "#333",
  },
});
const svgName = computed(() => {
  if (props.name.includes("/")) {
    return `#${props.name}`;
  } else {
    return `#/${props.name}`;
  }
});
const svgClass = computed(() =>
  props.className ? "svg-icon " + props.className : "svg-icon"
);
</script>

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgName" :fill="color" />
  </svg>
</template>

<style>
.svg-icon {
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  fill: currentColor;
  overflow: hidden;
}
</style>
ˇ
