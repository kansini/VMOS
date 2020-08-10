<template>
    <div class="vmo-terminal"
         v-if="isShow"
         :class="[isTop ? 'is-top':'',isFull? 'is-full':'']"
         :style="isFull?'left:0;top:0;':''"
         @click="clickWin"
    >
        <vmo-window-header title="document" @close="close()" :isActive="isActive" @toggleFullScreen="toggleFullScreen"/>
        <div class="vmo-terminal-body">
            <div class="vmo-terminal-commander">
                Last login: Thu Jul 23 09:28:00 on ttys000
            </div>
            <div class="vmo-terminal-commander">
                hong@OldHong Documents %
                <div class="vmo-terminal-input">
                    <input type="text" autofocus="autofocus">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "terminal",
        props: {
            title: {
                type: String,
                default: "window title"
            },
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
            }

        }
    }
</script>

<style lang="scss" scoped>
    .vmo-terminal {
        position: absolute;
        width: 50%;
        height: 480px;
        left: 50%;
        top: 50%;
        transform: translate(-36%, -40%);
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.90), 0 20px 30px 0 rgba(0, 0, 0, 0.30), 0 10px 50px 0 rgba(0, 0, 0, 0.20);
        border-radius: 5px;
        overflow: hidden;

        .vmo-terminal-body {
            width: 100%;
            height: calc(100% - 24px);
            background: rgba(0, 0, 0, .9);
            backdrop-filter: blur(6px);
            color: #29FE18;
            font-size: 14px;
            font-family: 'Consolas', 'Deja Vu Sans Mono', 'Bitstream Vera Sans Mono', monospace;
            padding: 2px 8px;
            box-sizing: border-box;

            .vmo-terminal-commander {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                position: relative;
                margin-bottom: 2px;

                .vmo-terminal-input {

                    input {
                        width: auto;
                        background: transparent;
                        border: none;
                        outline: none;
                        color: #29FE18;
                        font-family: 'Consolas', 'Deja Vu Sans Mono', 'Bitstream Vera Sans Mono', monospace;
                        padding: 0 8px;
                    }
                }

            }
        }
    }

    .is-full {
        width: 100%;
        height: 100vh;
        transform: translate(0, 0);
    }
</style>
