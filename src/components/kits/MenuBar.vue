<template>
    <div class="vmo-menubar">
        <div class="vmo-menubar-left"></div>
        <div class="vmo-menubar-right">
            <div class="vmo-menubar-icon">
                <img src="../../assets/img/icons/icon-AirPlay.svg" alt="">
            </div>
            <div class="vmo-menubar-icon">
                <img src="../../assets/img/icons/icon-WiFi.svg" alt="">
            </div>
            <div class="vmo-menubar-icon">
                <img src="../../assets/img/icons/icon-Volume.svg" alt="">
            </div>
            <div class="vmo-menubar-icon">
                <div style="margin-right: 4px">100%</div>
                <img src="../../assets/img/icons/icon-Battery.svg" alt="">
            </div>
            <div class="vmo-menubar-icon">
                <img src="../../assets/img/icons/icon-Spotlight.svg" alt="">
            </div>
            <div class="vmo-menubar-icon">
                <img src="../../assets/img/icons/icon-siri.svg" alt="">
            </div>
            <div class="vmo-menubar-icon" @click.stop="toggleNotificationCentre">
                <img src="../../assets/img/icons/icon-NotificationCentre.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuBar",
        methods:{
            toggleNotificationCentre(){
                this.$emit('toggleNC')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vmo-menubar {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 24px;
        padding: 0 24px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.75);
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.10), 0 1px 0 0 rgba(127, 127, 127, 0.40);
        backdrop-filter: blur(10px);
        font-size: 12px;
        z-index: 998;

        .vmo-menubar-right {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .vmo-menubar-icon {
                display: flex;
                align-items: center;

                img {
                    display: block;
                }

                &:not(:last-child) {
                    margin-right: 12px;
                }
            }
        }
    }

</style>
