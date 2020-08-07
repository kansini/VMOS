<template>
    <button class="mov-button"
            @click.prevent="handleToButton"
            @mouseover="overButton"
            :class="{isActive:isActive}">
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
        line-light: 22px;
        padding: 0 10px;
        background: transparent;
        border: none;
        outline: none;
        z-index: 9999;
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

    .isActive {
        background: #2076EA;
        color: #fff;
    }
</style>
