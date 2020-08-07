<template>
    <i :class="`vmo-ico-${icon}`" :style="{color:color,fontSize:`${size}px`}"></i>
</template>

<script>
    export default {
        name: "vmoIcon",
        props: {
            icon: {
                type: String,
                default: "apple"
            },
            color: {
                type: String,
                default: "#ff3333"
            },
            size: {
                type: Number,
                default: 100
            }
        }
    }
</script>

<style scoped>

</style>
