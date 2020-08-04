<template>
    <div class="vmo-finder"
         v-if="isShow"
         :class="[isTop ? 'is-top':'',isFull? 'is-full':'']"
         :style="isFull?'left:0;top:0;':''"
         @click="clickWin"
    >
        <vmo-window-header
                title="finder"
                :isActive="isActive"
                @toggleFullScreen="toggleFullScreen"
                @close="close()"/>
    </div>
</template>

<script>
    export default {
        name: "vmo-finder",
        props: {
            isShow: {
                type: Boolean,
                default: true
            },
            isTop: {
                type: Boolean,
                default: false
            },
            isActive: {
                type: Boolean,
                default: false
            }

        },
        data() {
            return {
                isFull: false
            }
        },
        methods: {
            close() {
                this.$emit('close')
            },
            clickWin() {
                this.$emit('clickWin')
            },
            toggleFullScreen() {
                this.isFull = !this.isFull
            }
        }
    }
</script>

<style lang="scss">
    .vmo-finder {
        position: absolute;
        width: 60%;
        height: 480px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: rgba(236, 236, 236, 1);
        backdrop-filter: blur(50px);
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, .2), 0 20px 30px 0 rgba(0, 0, 0, .3), 0 10px 50px 0 rgba(0, 0, 0, .2);
        border-radius: 5px;
      //  transition: all ease .1s;
    }
</style>
