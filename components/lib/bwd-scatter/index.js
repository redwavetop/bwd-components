import bwdScatter from './src/main.vue'
bwdScatter.install = function(Vue) {
    Vue.component(bwdScatter.name,bwdScatter)
}
export default bwdScatter