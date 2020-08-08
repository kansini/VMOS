<template>
    <div class="vmo-finder"
         v-if="isShow"
         :class="[isTop ? 'is-top':'',isFull? 'is-full':'']"
         :style="isFull?'left:0;top:0;':''"
         @click="clickWin"
    >
        <vmo-window-header
                :title="finderTitle"
                :isActive="isActive"
                :isFinder="true"
                :titleIcon="titleIcon"
                @toggleFullScreen="toggleFullScreen"
                @close="close()"/>
        <div class="vmo-finder-container">
            <div class="vmo-finder-aside">
                <div class="menu-group" v-for="(group,groupIndex) in menuGroup" :key="group.groupTitle">
                    <div class="aside-group-title">
                        <div>{{ group.groupTitle }}</div>
                        <div v-if="group.show" @click="group.show = !group.show" class="btn-toggle">隐藏</div>
                        <div v-else @click="group.show = !group.show" class="btn-toggle">显示</div>
                    </div>
                    <div class="menu-list" :style="!group.show ? 'height:0':''">
                        <div class="menu-list-item" v-for="(item,index) in group.menus" :key="index"
                             :class="{isActive:current.toString() == [groupIndex,index].toString()}"
                             @click="clickItem(groupIndex,index,item.title,item.icon)">
                            <vmo-icon :icon="item.icon"/>
                            <div class="menu-list-item--title">{{item.title}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="vmo-finer-content">
               <folderList />
            </div>
        </div>
    </div>
</template>

<script>
    import folderList from './FolderList'
    export default {
        name: "vmo-finder",
        components:{folderList},
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
                current: [-1, -1],
                finderTitle: "Macintosh HD",
                titleIcon: "",
                menuGroup: [
                    {
                        "groupTitle": "个人收藏",
                        "show": true,
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
                                "icon": "folder",
                                "title": "works"
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
                        "show": true,
                        "menus": [
                            {
                                "icon": "iCloud",
                                "title": "iCloud云盘"
                            }
                        ]
                    },
                    {
                        "groupTitle": "标签",
                        "show": true,
                        "menus": [
                            {
                                "icon": "tag-red",
                                "title": "红色"
                            },
                            {
                                "icon": "tag-yellow",
                                "title": "黄色"
                            },
                            {
                                "icon": "tag-orange",
                                "title": "橙色"
                            },
                            {
                                "icon": "tag-green",
                                "title": "绿色"
                            },
                            {
                                "icon": "tag-blue",
                                "title": "蓝色"
                            },
                            {
                                "icon": "tag-purple",
                                "title": "紫色"
                            },
                            {
                                "icon": "tag-gray",
                                "title": "灰色"
                            },
                            {
                                "icon": "allTags",
                                "title": "所有标签"
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
            clickItem(groupIndex, index, title, icon) {
                this.current = [groupIndex, index]
                this.finderTitle = title
                this.titleIcon = icon
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
                overflow: scroll;

                .menu-group {
                    &:not(:last-child) {
                        margin-bottom: 12px;
                    }

                    .aside-group-title {
                        display: flex;
                        justify-content: space-between;
                        padding: 0 10px;
                        font-size: 12px;
                        color: #666;
                        font-weight: 600;
                        margin-bottom: 4px;
                        cursor: default;

                        .btn-toggle {
                            opacity: 0;
                            transition: opacity ease .4s;
                        }

                        &:hover .btn-toggle {
                            opacity: 1;
                        }
                    }

                    .menu-list {
                        overflow: hidden;
                        transition: all ease .4s;

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
                        background-image: linear-gradient(90deg, rgba(201, 201, 201, .5) 0%, rgba(153, 153, 153, .6) 80%);
                    }

                }
            }

            .vmo-finer-content {
                width: calc(100% - 240px);
                height: 100%;
                padding: 4px 14px;
                box-sizing: border-box;
                background: #fff;
                overflow: scroll;
            }
        }
    }
</style>
