<template>
    <transition name="slideIn">
        <div class="vmo-notificationCentre" v-if="visible">
            <div class="vmo-notificationCentre-header">
                <div class="vmo-tabs">
                    <div class="vmo-tabs-item" v-for="(item,index) in tabs"
                         :class="currentTabIndex == index ? 'vmo-tabs-active' : '' "
                         @click="handleToTabs(index)">
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>

    </transition>
</template>

<script>
    export default {
        name: "notificationCentre",
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                tabs: ["今天", "通知"],
                currentTabIndex: 0
            }
        },
        methods: {
            handleToTabs(index) {
                this.currentTabIndex = index
                this.$emit('clickTab', index)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vmo-notificationCentre {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 343px;
        height: calc(100vh - 24px);
        background: rgba(255, 255, 255, 0.20);
        border: 1px solid rgba(0, 0, 0, 0.10);
        box-shadow: -5px 0 10px 0 rgba(0, 0, 0, 0.10);
        backdrop-filter: blur(20px);
        overflow: hidden;
        z-index: 999;

        &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(255, 255, 255, .2);
            z-index: 999;
            pointer-events: none;
        }

        .vmo-notificationCentre-header {
            width: 100%;
            padding: 16px 24px;
            box-sizing: border-box;
            border-bottom: 1px solid rgba(0, 0, 0, .2);
        }

        .vmo-tabs {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 24px;
            overflow: hidden;


            .vmo-tabs-item {
                text-align: center;
                width: 50%;
                color: #fff;
                font-size: 13px;
                background: rgba(0, 0, 0, .2);
                transition: all ease .3s;

                &:first-child {
                    border-radius: 4px 0 0 4px;
                }

                &:last-child {
                    border-radius: 0 4px 4px 0;
                }
            }

            .vmo-tabs-active {
                background: #F6F6F6;
                color: #333;
            }
        }
    }
</style>
