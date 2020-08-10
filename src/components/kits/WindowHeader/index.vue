<template>
    <div class="vmo-window-header" :class="isActive ? 'is-active' : ''">
        <div class="vmo-window-header--top">
            <div class="traffic-light">
                <div @click="close" class="btn-close"></div>
                <div @click="minimise" class="btn-minimise"></div>
                <div @click="toggleFullScreen" class="btn-toggleFullScreen"></div>
            </div>
            <div class="vmo-window-header--title">
                <vmo-icon :icon="titleIcon" type="color"/>
                <div>{{title}}</div>
            </div>
        </div>
        <div class="vmo-window-header--tools" v-if="isFinder">
            <div>
                <vmo-button type="flat" icon="back"/>
                <vmo-button type="flat" icon="forward"/>
            </div>
            <div class="vmo-view-toggle">
                <div class="vmo-view-toggle--item"
                     v-for="(item,index) in tabs"
                     :class="{isCurrent:currentView == index}"
                     :key="item.icon"
                     @click="currentView = index"
                >
                    <div :class="`vmo-ico-${item.icon}`"></div>
                </div>
            </div>
            <div>
                <vmo-button type="flat" icon="back"/>
                <vmo-button type="flat" icon="share"/>
            </div>
            <div class="vmo-search">
                <input type="text">
            </div>
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
            },
            titleIcon: {
                type: String,
                default: 'folder'
            }
        },
        data() {
            return {
                isFull: false,
                currentView: 0,
                tabs: [
                    {"icon": "iconView"},
                    {"icon": "listView"},
                    {"icon": "columnView"},
                    {"icon": "arrangement"}
                ]
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
            height: 24px;

            .traffic-light {
                position: absolute;
                left: 8px;
                top: 0;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 24px;
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
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: Helvetica;
                height: 24px;
                font-size: 13px;
                color: #423F42;
                letter-spacing: -0.3px;
                text-align: center;
                text-shadow: 1px 1px 0 rgba(255, 255, 255, .8);

                div {
                    margin-left: 4px;
                }
            }
        }

        .vmo-window-header--tools {
            height: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .vmo-view-toggle {
                height: 22px;
                width: 110px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                overflow: hidden;
                background-image: linear-gradient(180deg, #FEFEFE 0%, #FDFDFD 5%, #F1F1F1 100%);
                border: 1px solid #C9C9C9;
                box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.10);
                border-radius: 4px;
                box-sizing: border-box;

                .vmo-view-toggle--item {
                    width: 25%;
                    height: 22px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #808080;

                    &:not(:last-child) {
                        border-right: 1px solid #DEDEDE;
                    }

                    [class^="vmo-ico-"] {
                        font-size: 12px;

                    }
                }

                .isCurrent {
                    color: #fff;
                    background: #686768;
                    border: 1px solid #686768;
                    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.10);
                    box-sizing: border-box;
                }
            }

            .vmo-search {
                width: 25%;
                height: 20px;
                line-height: 20px;

                input {
                    background: linear-gradient(180deg, #FEFEFE 0%, #F1F1F1 100%);
                    border: 1px solid #eaeaea;
                    box-shadow: 0 0 0 1px rgba(0, 0, 0, .10), 0 0 1px 0 rgba(0, 0, 0, .20);
                    border-radius: 4px;
                    outline: none;
                    padding: 0 4px;
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;

                }
            }
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
