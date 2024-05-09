import bwdHeatmap from './src/main.vue'
bwdHeatmap.install = function(Vue) {
    Vue.component(bwdHeatmap.name,bwdHeatmap)
}
export default bwdHeatmap