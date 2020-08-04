<template>
    <transition name="fadeIn">
        <div class="vmo-launchpad" v-if="visible" @click.prevent="close">
            <div class="vmo-launchpad-search" @click.stop>
                <input type="text" placeholder="搜索">
            </div>
            <div class="vmo-launchpad-content">
                <div class="vmo-launchpad-item" v-for="(item,index) in apps" :key="item.name" v-if="index < 35">
                    <vmo-launchpad-icon :icon="item.icon" :name="item.name" :update="item.update"/>
                </div>
            </div>
            <div class="vmo-launchpad-content">
                <div class="vmo-launchpad-item" v-for="(item,index) in apps" :key="item.name"
                     v-if="index > 34 && index < 70">
                    <vmo-launchpad-icon :icon="item.icon" :name="item.name" :update="item.update"/>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import vmoLaunchpadIcon from './Icon'

    export default {
        name: "Launchpad",
        components: {vmoLaunchpadIcon},
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        },
        created() {
            this.getAppsData()
        },
        data() {
            return {
                apps: []
            }
        },
        methods: {
            close() {
                this.$emit('close')
            },
            getAppsData() {
                this.$axios.get('launchpad.json')
                    .then(res => this.apps = res.data)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vmo-launchpad {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, .4);
        backdrop-filter: blur(30px);
        z-index: 9999;

        .vmo-launchpad-search {
            width: 100%;
            padding: 24px 0;
            text-align: center;


            input {
                padding: 0 104px;
                box-sizing: border-box;
                height: 24px;
                line-height: 24px;
                width: 240px;
                border: 1px solid rgba(255, 255, 255, .1);
                border-radius: 4px;
                background: rgba(255, 255, 255, .05);
                outline: none;
                color: #fff;
                text-align: left;
                transition: all ease .2s;

                &::placeholder {
                    color: rgba(255, 255, 255, .4);

                }

                &:focus {
                    padding: 0 12px;
                }
            }
        }

        .vmo-launchpad-content {
            width: 100%;
            padding: 0 128px;
            box-sizing: border-box;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            .vmo-launchpad-item {
                width: calc(100% / 7);
                margin-bottom: 24px;
            }
        }
    }

</style>
