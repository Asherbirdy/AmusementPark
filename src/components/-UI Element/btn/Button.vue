 <template>
    <button :style="{ color: internalTextColor, backgroundColor: internalButtonColor }"
        @mouseover="internalButtonColor = internalHoverColor" @mouseleave="internalButtonColor = this.buttonColor">
        <slot>預設按鈕</slot>
    </button>
</template>
<script>
export default {
    props: {
        buttonTextColor: {
            type: String,
            default: '#F9F3E4',
        },
        buttonColor: {
            type: String,
            default: '#D1825B',
        },
        buttonHoverColor: {
            type: String,
            default: '#C0590E',
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
<style scoped lang="scss">
button {
    cursor: pointer;
    height: 40px;
    width: 100px;
    font-size: 20px;
    border: none;
    border-radius: 0.3rem;
}
</style>
  