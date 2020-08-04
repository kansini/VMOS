<template>
    <div class="vmo-launchpad-icon-container">
        <div class="vmo-launchpad-icon"
             @click="handleToDockIcon"
        >
            <img :src="`./icons/dock/ico-${icon}.svg`" alt="">
            <div class="vmo-badge" v-if="update > 0">
                {{ update }}
            </div>
        </div>
        <div class="vmo-launchpad-icon-title">
            {{ name }}
        </div>
    </div>

</template>

<script>
    export default {
        name: "vmo-launchpad-icon",
        props: {
            icon: {
                type: String,
                default: ""
            },
            name: {
                type: String,
                default: ""
            },
            update: {
                type: Number,
                default: null
            }
        },
        data() {
            return {}
        },
        methods: {
            handleToDockIcon() {
                this.$emit('clickApp')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vmo-launchpad-icon-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        .vmo-launchpad-icon {

            position: relative;
            width: 88px;

            img {
                display: block;
                width: 100%;

            }

            .vmo-badge {
                position: absolute;
                top: 0;
                right: 0;
                width: 32px;
                height: 32px;
                text-align: center;
                line-height: 32px;
                border-radius: 32px;
                background: rgba(255, 36, 63, .9);
                box-shadow: 0 0 5px 0 rgba(0, 0, 0, .2);
                color: #fff;
                font-size: 16px;
            }

        }

        .vmo-launchpad-icon-title {
            color: #fff;
            font-size: 13px;
            text-transform: capitalize;
        }

    }


</style>
