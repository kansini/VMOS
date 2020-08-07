import vmoWin from './Window'
import vmoMenuBar from './MenuBar' //notificationCentre
import vmoDock from './Dock/index'
import vmoNotificationCentre from './NotificationCentre'
import vmoWindowHeader from './WindowHeader'
import vmoLaunchpad from './Launchpad'
import vmoMenu from './Menu'
import vmoIcon from './Icon'
import vmoButton from './Button'

const components = {
    vmoWin,
    vmoMenuBar,
    vmoDock,
    vmoNotificationCentre,
    vmoWindowHeader,
    vmoLaunchpad,
    vmoMenu,
    vmoIcon,
    vmoButton
}
const install = (Vue, opts = {}) => {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })
}

export default install
