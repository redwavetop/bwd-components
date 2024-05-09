import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import '../components/css/index.scss'
import bwdCard from  '../components/lib/bwd-card/index'
Vue.use(bwdCard)


import bwdPie from  '../components/lib/bwd-pie/index'
Vue.use(bwdPie)

import bwdBar from  '../components/lib/bwd-bar/index'
Vue.use(bwdBar)

import bwdLine from  '../components/lib/bwd-line/index'
Vue.use(bwdLine)

import bwdScatter from  '../components/lib/bwd-scatter/index'
Vue.use(bwdScatter)

import bwdGauge from  '../components/lib/bwd-gauge/index'
Vue.use(bwdGauge)

import bwdHeatmap from  '../components/lib/bwd-heatmap/index'
Vue.use(bwdHeatmap)

import bwdGraph from  '../components/lib/bwd-graph/index'
Vue.use(bwdGraph)

import bwdColorSelect from  '../components/lib/bwd-colorSelect/index'
Vue.use(bwdColorSelect)

import bwdTable from  '../components/lib/bwd-table/index'
Vue.use(bwdTable)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')