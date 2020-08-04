<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    .is-fullSize {
        left: 0 !important;
        top: 0 !important;
        width: 100% !important;
        height: 100vh !important;
        transform: translate(0, 0) !important;
        transition: all ease .4s;
    }

</style>
