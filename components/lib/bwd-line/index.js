import bwdline from './src/main.vue'
bwdline.install = function(Vue) {
    Vue.component(bwdline.name,bwdline)
}
export default bwdline