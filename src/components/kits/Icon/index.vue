<template>
    <svg class="vmo-icon" aria-hidden="true">
        <use :xlink:href="`#vmo-ico-${icon}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "vmoIcon",
        props: {
            icon: {
                type: String,
                default: "pictures"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
