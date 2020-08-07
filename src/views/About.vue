<template>
    <div class="about">
        <div class="vmo-ico-apple"></div>
        <vmo-icon icon="arrangemen"/>
        <vmo-icon icon="search" color="#ff6666" :size="88"/>
        <vmo-button icon="apple"/>
        <vmo-button :isActive="active" @click="active = true">文件</vmo-button>
        <vmo-button>编辑</vmo-button>
    </div>
</template>
<script>
    export default {
        name: "About",
        data() {
            return {
               active:false
            }
        },
    }
</script>
