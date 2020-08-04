<template>
    <div class="vmo-window"
         v-if="isShow"
         :class="[isTop ? 'is-top':'',isFull? 'is-full':'']"
         :style="isFull?'left:0;top:0;':''"
         @click="clickWin"
    >
        <vmo-window-header
                title="works"
                @close="close()"
                :isActive="isActive"
                @toggleFullScreen="toggleFullScreen"/>
    </div>
</template>

<script>
    export default {
        name: "Window",
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
                this.$emit('toggleFullScreen')
                this.isFull = !this.isFull
            },

        }
    }
</script>

<style lang="scss">
    .vmo-window {
        position: absolute;
        width: 60%;
        height: 480px;
        left: 40%;
        top: 60%;
        transform: translate(-50%, -50%);
        background: rgba(236, 236, 236, .1);
        backdrop-filter: blur(50px);
        box-shadow: 0 20px 30px 0 rgba(0, 0, 0, .3), 0 10px 50px 0 rgba(0, 0, 0, .1);
        border-radius: 5px;
        // transition: all ease .1s;
        will-change: transform;
    }
</style>
