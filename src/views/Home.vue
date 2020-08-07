<template>
    <div class="home" @click="closeNC" @mousemove="toggleDock($event)">
        <vmo-menu />
        <vmo-launchpad :visible.sync="launchpad" @close="closeLaunchpad"/>
        <vmo-menu-bar @toggleNC="toggleNC"/>
        <components v-for="(app,index) in apps"
                    :style="{zIndex:app.level}"
                    :is="`vmo-${app.name}`"
                    :isShow.sync="app.show"
                    :isTop="currentTop == index"
                    :isActive="currentTop == index"
                    @clickWin="activeWin(index)"
                    @close="closeApp(index)"
                    @toggleFullScreen="toggleFullScreen(index)"
                    :key="app.name"
                    :isFullSize.sync="app.fullSize"
                    v-drag
        />
        <vmo-dock @click="clickDock" :visible="showDock"/>
        <vmo-notificationCentre @click.native.stop :visible="showNotify"/>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                showNotify: false,
                showDock: true,
                launchpad: false,
                apps: [
                    {
                        "name": "terminal",
                        "show": true,
                        "level": 1,
                        "fullSize": false
                    },
                    {
                        "name": "finder",
                        "show": true,
                        "level": 2,
                        "fullSize": false
                    },
                    {
                        "name": "win",
                        "show": true,
                        "level": 3,
                        "fullSize": false
                    }
                ],
                currentTop: 2,
                appsAccount: 3

            }
        },
        methods: {
            toggleNC() {
                this.showNotify = !this.showNotify
            },
            closeNC() {
                this.showNotify = false
            },
            toggleDock(e) {
                e.pageY > 740 ? this.showDock = true : this.showDock = false
            },
            closeApp(index) {
                this.apps[index].show = false
                this.appsAccount--
            },
            activeWin(index) {
                this.currentTop = index
            },
            toggleFullScreen(index) {
                // console.log(index)
            },
            clickDock(name) {
                this[name] = !this[name]
                if (this[name] == true) {
                    this.apps.forEach((item) => {
                        item.show = false
                    })
                } else {
                    this.apps.forEach((item) => {
                        item.show = true
                    })
                }
            },
            closeLaunchpad() {
                this.launchpad = false
                this.apps.forEach((item) => {
                    item.show = true
                })
            }
        },


        directives: {
            drag(el) {
                el.onmousedown = (e) => {
                    let x = e.clientX - el.offsetLeft;
                    let y = e.clientY - el.offsetTop;
                    document.onmousemove = function (e) {
                        el.style.left = e.clientX - x + 'px';
                        el.style.top = e.clientY - y + 'px';

                    }
                    document.onmouseup = () => {
                        document.onmousemove = document.onmouseup = null;
                    }
                }
            }
        },
    }
</script>
<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100vh;
        background: url("../assets/img/wallpaper/Sierra.jpg") no-repeat center;
        background-size: 100% 100vh;
        background-clip: content-box;
        overflow: hidden;
    }

    .is-top {
        z-index: 10 !important;
    }
</style>
