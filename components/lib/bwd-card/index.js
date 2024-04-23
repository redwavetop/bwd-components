import bwdCard from './src/main.vue'
bwdCard.install = function(Vue) {
    Vue.component(bwdCard.name,bwdCard)
}
export default bwdCard