<template>
    <div class="vmo-menu" v-if="visible" @click="clickItem">
        <div class="vom-menu-item"
             v-for="(item,index) in menus"
             :class="item.divider ? 'vom-menu-item--hasDivider' : ''"
        >
            <div class="vom-menu-item-content">
                <div>{{item.title}}</div>
                <div>{{item.shortcut}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            menus: {
                type: Array,
                default: () => [
                    {
                        "title": "关于本机",
                        "divider": true
                    },
                    {"title": "系统偏好设置"},
                    {
                        "title": "App Store",
                        "divider": true
                    },
                    {"title": "最近使用项目", "divider": true},
                    {
                        "title": "强制退出",
                        "shortcut": "⌘W",
                        "divider": true
                    },
                    {"title": "睡眠"},
                    {"title": "重新启动"},
                    {"title": "关机", "divider": true},
                    {"title": "锁定屏幕"},
                    {"title": "退出登录"}
                ]
            }
        },
        methods: {
            clickItem() {
                this.$emit('clickItem')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vmo-menu {
        position: absolute;
        padding: 4px 0;
        box-sizing: border-box;
        top: 22px;
        left: 0;
        width: 218px;
        font-size: 14px;
        background: rgba(239, 240, 240, .8);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.20), 0 4px 10px 0 rgba(0, 0, 0, 0.28);
        border-radius: 0 0 5px 5px;
        backdrop-filter: blur(20px);

        .vom-menu-item {

            color: #333;
            text-align: left;
            font-weight: normal;

            .vom-menu-item-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 8px 0 20px;


                &:hover {
                    background: #2076EA;
                    color: #fff;
                }


            }
        }

        .vom-menu-item--hasDivider {


            &::after {
                display: block;
                content: '';
                margin: 4px 0;
                width: 100%;
                height: 2px;
                background: rgba(0, 0, 0, .08);
            }
        }
    }

</style>
