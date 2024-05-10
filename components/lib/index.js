import BwdColorSelect from './bwd-colorSelect';
import BwdCard from './bwd-card';
import BwdPie from './bwd-pie';
import BwdBar from './bwd-bar';
import BwdLine from './bwd-line';
import BwdScatter from './bwd-scatter';
import BwdGauge from './bwd-gauge';
import BwdHeatmap from './bwd-heatmap';
import BwdGraph from './bwd-graph';
import BwdTable from './bwd-table';
import BwdHead from './bwd-head';

const components = {
  BwdCard,
  BwdPie,
  BwdColorSelect,
  BwdBar,
  BwdLine,
  BwdScatter,
  BwdGauge, 
  BwdHeatmap,
  BwdGraph,
  BwdTable,
  BwdHead
}

const install = function(Vue){
  if(install.installed) return;
  Object.keys(components).forEach(key =>{
    Vue.component(components[key].name,components[key])
  })
}

const API = {
  install
}
export default API;

export {
  BwdCard,
  BwdPie,
  BwdColorSelect,
  BwdBar,
  BwdLine,
  BwdScatter,
  BwdGauge,
  BwdHeatmap,
  BwdGraph,
  BwdTable,
  BwdHead
}