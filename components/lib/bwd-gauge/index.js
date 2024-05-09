import bwdGauge from './src/main.vue'
bwdGauge.install = function(Vue) {
    Vue.component(bwdGauge.name,bwdGauge)
}
export default bwdGauge