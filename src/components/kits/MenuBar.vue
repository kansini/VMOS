<template>
    <div class="vmo-menubar">
        <div class="vmo-menubar-left">
            <vmo-button
                    :icon="btn.icon"
                    v-for="(btn,index) in buttons"
                    :menus="btn.menus"
                    :is-active="currentBtn == index"
                    :key="btn.title"
                    @click="clickTopMenu(index)"
                    @over="overTopMenu(index)"
            >
                <span v-if="btn.title">{{btn.title}}</span>
            </vmo-button>
        </div>
        <div class="vmo-menubar-right">
            <div class="vmo-menubar-icon">
                <img src="../../assets/img/icons/icon-AirPlay.svg" alt="">
            </div>
            <div class="vmo-menubar-icon">
                <img src="../../assets/img/icons/icon-WiFi.svg" alt="">
            </div>
            <div class="vmo-menubar-icon">
                <img src="../../assets/img/icons/icon-Volume.svg" alt="">
            </div>
            <div class="vmo-menubar-icon">
                <div style="margin-right: 4px">100%</div>
                <img src="../../assets/img/icons/icon-Battery.svg" alt="">
            </div>
            <div class="vmo-menubar-icon">
                <img src="../../assets/img/icons/icon-Spotlight.svg" alt="">
            </div>
            <div class="vmo-menubar-icon">
                <img src="../../assets/img/icons/icon-siri.svg" alt="">
            </div>
            <div class="vmo-menubar-icon" @click.stop="toggleNotificationCentre">
                <img src="../../assets/img/icons/icon-NotificationCentre.svg" alt="">
            </div>
        </div>
        <div class="vmo-menubar-mask" v-if="topMenuActive" @click="clickMask"></div>
    </div>
</template>

<script>
    export default {
        name: "MenuBar",
        props: {
            buttons: {
                type: Array,
                default: () => [
                    {
                        "icon": "apple",
                        "isActive": true,
                        "menus": [
                            {
                                "title": "关于本机",
                                "divider": true
                            },
                            {
                                "title": "系统偏好设置"
                            },
                            {
                                "title": "App Store",
                                "divider": true
                            },
                            {
                                "title": "最近使用项目",
                                "divider": true
                            },
                            {
                                "title": "强制退出",
                                "shortcut": "⌘W",
                                "divider": true
                            },
                            {"title": "睡眠"},
                            {"title": "重新启动"},
                            {
                                "title": "关机",
                                "divider": true
                            },
                            {
                                "title": "锁定屏幕",
                                "shortcut": "^⌘Q",
                            },
                            {
                                "title": "退出登录",
                                "shortcut": "⇧⌘Q"
                            }]
                    },
                    {
                        "title": "访达",
                        "menus": [
                            {
                                "title": "关于访达",
                                "divider": true
                            },
                            {
                                "title": "偏好设置…",
                                "divider": true,
                                "shortcut": "⌘,",
                            },
                            {
                                "title": "倾倒废纸篓",
                                "divider": true
                            },
                            {
                                "title": "服务",
                                "divider": true
                            },
                            {"title": "隐藏访达"},
                            {"title": "隐藏其它"},
                            {"title": "全部显示"}
                        ]

                    },
                    {
                        "title": "文件"
                    },
                    {
                        "title": "编辑"
                    },
                    {
                        "title": "显示"
                    },
                    {
                        "title": "前往"
                    },
                    {
                        "title": "窗口"
                    },
                    {
                        "title": "帮助"
                    }
                ]
            }
        },
        data() {
            return {
                currentBtn: -1,
                topMenuActive: false
            }
        },
        methods: {
            toggleNotificationCentre() {
                this.$emit('toggleNC')
            },
            clickTopMenu(index) {
                this.topMenuActive = !this.topMenuActive
                this.topMenuActive ? this.currentBtn = index : this.currentBtn = -1
            },
            overTopMenu(index) {
                this.topMenuActive ? this.currentBtn = index : ''
            },
            clickMask() {
                this.topMenuActive = false
                this.currentBtn = -1
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vmo-menubar {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 22px;
        padding: 0 24px 0 10px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.75);
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.10), 0 1px 0 0 rgba(127, 127, 127, 0.40);
        backdrop-filter: blur(10px);
        font-size: 12px;
        z-index: 998;

        .vmo-menubar-mask {
            left: 0;
            top: 22px;
            position: fixed;
            width: 100%;
            height: calc(100vh - 22px);
            z-index: 11;
            background: transparent;
        }

        .vmo-menubar-left {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        .vmo-menubar-right {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .vmo-menubar-icon {
                display: flex;
                align-items: center;

                img {
                    display: block;
                }

                &:not(:last-child) {
                    margin-right: 12px;
                }
            }
        }
    }

</style>
