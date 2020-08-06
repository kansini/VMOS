<template>
    <div class="vmo-dock-icon"
         :style="`background:url(./icons/dock/ico-${icon}.svg )no-repeat center;background-size: 60px;`"
         :class="isClicked ? 'is-clicked' : ''"
         @mousedown="toggleIcon(true)"
         @mouseup="toggleIcon(false)"
         :data-name="name"
    >
        <div class="vmo-badge" v-if="update > 0">
            {{ update }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "vmo-dock-icon",
        props: {
            icon: {
                type: String,
                default: "finder"
            },
            name: {
                type: String,
                default: "访达"
            },
            update: {
                type: Number,
                default: null
            }


        },
        data() {
            return {
                isClicked: false
            }
        },
        methods: {
            toggleIcon(status) {
                this.isClicked = status
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vmo-dock-icon {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 64px;
        height: 64px;
        transition: all ease .2s;
        background-size: 100%;

        &::before {
            content: attr(data-name);
            color: #000;
            font-size: 14px;
            height: 24px;
            line-height: 24px;
            padding: 0 16px;
            opacity: 0;
            background: rgba(255, 255, 255, .6);
            backdrop-filter: blur(10px);
            transition: all ease .05s;
            text-transform: capitalize;
            box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.20);
            border-radius: 4px;
        }

        &::after {
            position: absolute;
            content: '';
            display: block;
            -webkit-clip-path: polygon(0 100%, 50% 0, 100% 100%);
            width: 16px;
            height: 8px;
            background: rgba(255, 255, 255, .6);
            opacity: 0;
            transition: all ease .05s;
            transform: translateY(-24px) rotate(180deg);
            z-index: 999;
        }

        &:hover::before {
            opacity: 1;
            transform: translateY(-48px);

        }

        &:hover::after {
            opacity: 1;
        }

        .vmo-badge {
            position: absolute;
            top: 0;
            right: 16px;
            width: 24px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            border-radius: 12px;
            background: rgba(255, 36, 63, .9);
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, .2);
            color: #fff;
            font-size: 14px;
        }

    }

    .is-clicked {
        filter: brightness(.4);
        //opacity: .8;
    }

</style>
