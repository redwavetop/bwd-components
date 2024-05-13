import bwdEcharts from './src/main.vue'
bwdEcharts.install = function(Vue) {
    Vue.component(bwdEcharts.name,bwdEcharts)
}
export default bwdEcharts