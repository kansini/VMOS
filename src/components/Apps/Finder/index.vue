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
                :isFinder="true"
                @toggleFullScreen="toggleFullScreen"
                @close="close()"/>
        <div class="vmo-finder-container">
            <div class="vmo-finder-aside">
                <div class="menu-group" v-for="group in menuGroup" :key="group.groupTitle">
                    <div class="aside-group-title">
                        {{ group.groupTitle }}
                    </div>
                    <div class="menu-list" v-for="(item,index) in group.menus" :key="index">
                        <div class="menu-list-item" :class="{isActive:current == index}" @click="clickItem(index)">
                            <vmo-icon :icon="item.icon"/>
                            <div class="menu-list-item--title">{{item.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vmo-finer-content"></div>
        </div>
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
                isFull: false,
                current: -1,
                menuGroup: [
                    {
                        "groupTitle": "个人收藏",
                        "menus": [
                            {
                                "icon": "airDrop",
                                "title": "隔空投递"
                            },
                            {
                                "icon": "allFiles",
                                "title": "最近文件"
                            },
                            {
                                "icon": "applications",
                                "title": "应用"
                            },
                            {
                                "icon": "desktop",
                                "title": "桌面"
                            },
                            {
                                "icon": "documents",
                                "title": "文稿"
                            },
                            {
                                "icon": "downloads",
                                "title": "下载"
                            },
                            {
                                "icon": "movies",
                                "title": "影片"
                            },
                            {
                                "icon": "music",
                                "title": "音乐"
                            },
                            {
                                "icon": "pictures",
                                "title": "照片"
                            }

                        ]
                    },
                    {
                        "groupTitle": "iCloud",
                        "menus": [
                            {
                                "icon": "iCloud",
                                "title": "iCloud云盘"
                            }
                        ]
                    }

                ]
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
            },
            clickItem(index) {
                this.current = index
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
        //background: #fff;
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, .2), 0 20px 30px 0 rgba(0, 0, 0, .3), 0 10px 50px 0 rgba(0, 0, 0, .2);
        border-radius: 5px;

        .vmo-finder-container {
            width: 100%;
            height: calc(100% - 32px);
            display: flex;
            justify-content: space-between;
            border-radius: 0 0 5px 5px;
            overflow: hidden;

            .vmo-finder-aside {
                width: 240px;
                height: 100%;
                padding: 8px 0;
                box-sizing: border-box;
                background: rgba(246, 246, 246, 0.85);
                box-shadow: inset -1px 0 0 0 rgba(0, 0, 0, .2);
                backdrop-filter: blur(20px);

                .menu-group {
                    margin-bottom: 12px;
                    .aside-group-title {
                        padding: 0 10px;
                        font-size: 12px;
                        color: #666;
                        font-weight: 600;
                        margin-bottom: 4px;
                    }

                    .menu-list {

                        .menu-list-item {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            padding: 4px 18px;
                            font-size: 13px;
                            color: #333;
                            cursor: default;

                            .menu-list-item--title {
                                margin-left: 4px;
                            }
                        }
                    }

                    .isActive {
                        color: #000;
                        background-image: linear-gradient(90deg, rgba(153, 153, 153, .6) 0%, rgba(201, 201, 201, .5) 80%);
                    }

                }
            }

            .vmo-finer-content {
                width: calc(100% - 240px);
                height: 100%;
                background: #fff;
            }
        }
    }
</style>
