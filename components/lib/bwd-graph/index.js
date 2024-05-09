import bwdGraph from './src/main.vue'
bwdGraph.install = function(Vue) {
    Vue.component(bwdGraph.name,bwdGraph)
}
export default bwdGraph