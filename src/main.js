import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Button } from 'mint-ui';

import router from './router'
import '@/assets/css/reset.css'

Vue.use(MintUI)
Vue.config.productionTip = false
Vue.component(Button.name, Button);

import VueBus from 'vue-bus';
Vue.use(VueBus);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
