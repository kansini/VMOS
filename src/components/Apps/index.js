import vmoFinder from './Finder'
import vmoTerminal from './Terminal'

const components = {
    vmoFinder,
    vmoTerminal
}
const install = (Vue, opts = {}) => {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key])
    })
}

export default install
