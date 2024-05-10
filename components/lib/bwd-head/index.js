import bwdTable from './src/main.vue'
bwdTable.install = function(Vue) {
    Vue.component(bwdTable.name,bwdTable)
}
export default bwdTable