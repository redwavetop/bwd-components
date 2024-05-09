import bwdBar from './src/main.vue'
bwdBar.install = function(Vue) {
    Vue.component(bwdBar.name,bwdBar)
}
export default bwdBar