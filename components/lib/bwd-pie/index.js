import bwdPie from './src/main.vue'
bwdPie.install = function(Vue) {
    Vue.component(bwdPie.name,bwdPie)
}
export default bwdPie