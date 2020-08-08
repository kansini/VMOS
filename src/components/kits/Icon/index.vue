<template>
    <svg class="vmo-icon" aria-hidden="true">
        <use :xlink:href="`#vmo-ico-color-${icon}`" v-if="type == 'color'"></use>
        <use :xlink:href="`#vmo-ico-${icon}`" v-else></use>
    </svg>
</template>

<script>
    export default {
        name: "vmoIcon",
        props: {
            icon: {
                type: String,
                default: "pictures"
            },
            type: {
                type: String,
                default: 'normal'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
