<template>
    <div class="about">
        <vmo-icon icon="documents"/>
        <vmo-icon icon="pictures"/>
        <vmo-icon icon="search" color="#ff6666" :size="88"/>
        <vmo-button icon="apple"/>
        <vmo-button :isActive="active" @click="active = true">文件</vmo-button>
    </div>
</template>
<script>
    export default {
        name: "About",
        data() {
            return {
                active: false
            }
        },
    }
</script>
