<template>
    <div class="vmo-window-header" :class="isActive ? 'is-active' : ''">
        <div class="vmo-window-header--top">
            <div class="traffic-light">
                <div @click="close" class="btn-close"></div>
                <div @click="minimise" class="btn-minimise"></div>
                <div @click="toggleFullScreen" class="btn-toggleFullScreen"></div>
            </div>
            <div class="vmo-window-header--title">{{title}}</div>
        </div>
        <div class="vmo-window-header--tools" v-if="isFinder">

        </div>
    </div>

</template>

<script>
    export default {
        name: "windowHeader",
        props: {
            title: {
                type: String,
                default: "window title"
            },
            isActive: {
                type: Boolean,
                default: false
            },
            isFinder: {
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
            minimise() {
                this.$emit('minimise')
            },
            toggleFullScreen() {
                this.$emit('toggleFullScreen')
                this.isFull = !this.isFull
            }
        }

    }
</script>

<style lang="scss" scoped>
    .vmo-window-header {
        text-align: center;
        width: 100%;
        padding: 0 8px;
        box-sizing: border-box;
        background-image: linear-gradient(180deg, #F7F6F7 0%, #EDEBED 2%, #E2E0E2 49%, #D6D4D6 100%);
        box-shadow: 0 1px 0 0 rgba(255, 255, 255, .6), inset 0 -1px 0 0 rgba(0, 0, 0, .3);
        border-radius: 5px 5px 0 0;

        .vmo-window-header--top {
            height: 32px;
            line-height: 32px;

            .traffic-light {
                position: absolute;
                left: 8px;
                top: 0;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 32px;
                width: 52px;


                [class^="btn-"] {
                    background: #DEDEDE;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 12px;
                    height: 12px;
                    border-radius: 12px;

                    &:not(:first-child) {
                        margin-left: 8px;
                    }

                    &::before {
                        content: '';
                        width: 6px;
                        height: 6px;
                        opacity: 0;
                        transition: opacity ease .2s;
                    }


                    &:nth-child(1)::before {
                        background: url("../../../assets/img/icons/icon-close.svg") no-repeat center;
                    }


                    &:nth-child(2)::before {
                        background: url("../../../assets/img/icons/icon-minimise.svg") no-repeat center;
                    }

                    &:nth-child(3)::before {
                        background: url("../../../assets/img/icons/icon-fullScreen.svg") no-repeat center;
                    }
                }


                &:hover {
                    .btn-close {
                        background: #FF5F58;
                    }

                    .btn-minimise {
                        background: #FFBE2F;
                    }

                    .btn-toggleFullScreen {
                        background: #2AC940;
                    }
                }

                &:hover div::before {
                    opacity: 1;
                }

            }

            .vmo-window-header--title {
                font-family: Helvetica;
                font-size: 13px;
                color: #423F42;
                letter-spacing: -0.3px;
                text-align: center;
                text-shadow: 1px 1px 0 rgba(255, 255, 255, .8);
            }
        }

        .vmo-window-header--tools {
            height: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }


    }

    .is-active {
        background-image: linear-gradient(180deg, #E7E6E7 0%, #D1D0D1 100%);

        .vmo-window-header--top {
            .traffic-light {
                [class^="btn-"] {
                    background: #FF5F58;
                    border: 0px solid #E1483F;
                    transition: all ease .4s;
                }

                .btn-minimise {
                    background: #FFBE2F;
                    border: 0px solid #E0A028;
                }

                .btn-toggleFullScreen {
                    background: #2AC940;
                    border: 0px solid #2BAC2D;
                }
            }
        }
    }


</style>
