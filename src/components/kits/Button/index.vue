<template>
    <button class="mov-button"
            @click.prevent="handleToButton"
            @mouseover="overButton"
            :class="[{isActive:isActive},type == 'flat' ? 'mov-button-flat':'']">
        <i :class="`vmo-ico-${icon}`"></i>
        <slot></slot>
        <vmo-menu :visible="isActive" :menus="menus"/>
    </button>
</template>

<script>
    export default {
        name: "movButton",
        props: {
            icon: {
                type: String,
                default: ""
            },
            isActive: {
                type: Boolean,
                default: false
            },
            showMenu: {
                type: Boolean,
                default: false
            },
            menus: {
                type: Array,
                default: () => []
            },
            type: {
                type: String,
                default: ""
            }

        },
        methods: {
            handleToButton() {
                this.$emit('click')
            },
            overButton() {
                this.$emit('over')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mov-button {
        position: relative;
        height: 22px;
        padding: 0 10px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 14px;
        color: rgba(0, 0, 0, .75);
        font-weight: 400;
        z-index: 999;

        &:nth-child(2) {
            font-weight: 600;
        }

        i {
            font-size: 16px;
        }
    }

    .mov-button-flat {
        padding: 0 8px;
        background-image: linear-gradient(180deg, #FEFEFE 0%, #F1F1F1 100%);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.10);
        border: 1px solid #D2D0D2;
        border-radius: 4px;
        font-weight: 400 !important;

        i {
            font-size: 12px;
            color: #808080;
        }
    }

    .isActive {
        background: #2076EA;
        color: #fff;
    }
</style>
