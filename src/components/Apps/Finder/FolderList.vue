<template>
    <div class="vom-folder-list" @click="currentFolder = -1">
        <div class="vmo-finer-item" v-for="(item,index) in folders"
             :class="{isActive:currentFolder == index}"
             :key="item.title"
             @click.stop="currentFolder = index">
            <div class="vmo-finer-item-icon">
                <img :src="`./icons/custom/${item.icon}.svg`" alt="">
            </div>
            <div class="vmo-finer-item-title">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FolderList",
        props: {
            folders: {
                type: Array,
                default: () => [
                    {
                        "icon": "folder-system",
                        "title": "系统"
                    },
                    {
                        "icon": "folder-user",
                        "title": "用户"
                    },
                    {
                        "icon": "folder-library",
                        "title": "资源库"
                    },
                    {
                        "icon": "folder-applications",
                        "title": "应用程序"
                    }
                ]
            }
        },
        data() {
            return {
                currentFolder: -1,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .vom-folder-list {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;

        .vmo-finer-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 20px;

            .vmo-finer-item-icon {
                width: 90px;
                height: 90px;
                padding: 0 8px;
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                margin-bottom: 2px;
                transition: background ease .2s;

                img {
                    display: block;
                    width: 100%;
                }
            }

            .vmo-finer-item-title {
                padding: 0 4px;
                font-size: 12px;
                color: #333;
                border-radius: 3px;
                transition: all ease .2s;
            }

        }

        .isActive {
            .vmo-finer-item-icon {
                background: #E6E6E6;
            }

            .vmo-finer-item-title {
                color: #fff;
                background: #0163E1;
            }
        }


    }


</style>
