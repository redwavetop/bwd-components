

import BwdCard from './bwd-card';
import BwdPie from './bwd-pie';
import BwdColorSelect from './bwd-colorSelect';

const components = {
  BwdCard,
  BwdPie,
  BwdColorSelect
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
  BwdColorSelect
}