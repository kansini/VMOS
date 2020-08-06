<template>
    <transition name="slideUp">
        <div class="vmo-dock" v-if="visible">
            <div class="vmo-dock-item"
                 :class="app.isActive ? 'vmo-dock-item-active': '' "
                 v-for="app in apps"
                 :key="app.icon"
                 @click="handleToIcon(app.icon)"
            >
                <vmo-dock-icon :icon="app.icon" :name="app.name" :update="app.update"/>
            </div>

        </div>
    </transition>
</template>

<script>
    import vmoDockIcon from './Icon'

    export default {
        icon: "Dock",
        components: {
            vmoDockIcon
        },
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                apps: []
            }
        },
        created() {
            this.getAppsData()
        },
        methods: {
            getAppsData() {
                this.$axios.get('dock.json')
                    .then(res => this.apps = res.data)
            },
            handleToIcon(name) {
                this.$emit('click', name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vmo-dock {
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 76px;
        //padding: 0 4px;
        box-sizing: border-box;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 0);
        background: rgba(250, 250, 250, .3);
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, .2);
        border-radius: 4px 4px 0 0;
        backdrop-filter: blur(20px);
        transition: all ease .3s;
        z-index: 9999;

        .vmo-dock-item {
            width: 64px;
            height: 64px;
            padding: 0 2px;

            &:last-child {
                position: relative;
                padding-left: 12px;
            }

            &:last-child::before {
                position: absolute;
                content: '';
                width: 1px;
                height: 56px;
                left: 0;
                top: 4px;
                background: rgba(0, 0, 0, .2);
            }

            &:nth-last-child(2) {
                padding-right: 12px;
            }
        }

        .vmo-dock-item-active {
            position: relative;

            &::after {
                position: absolute;
                content: '';
                width: 4px;
                height: 4px;
                border-radius: 4px;
                background: rgba(0, 0, 0, .9);
                left: 50%;
                bottom: -4px;
                transform: translateX(-50%);
            }
        }
    }

</style>
