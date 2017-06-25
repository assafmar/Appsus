// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import moment from 'moment'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import * as VueGoogleMaps from 'vue2-google-maps';
import axios from 'axios';

Vue.use(axios)
Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBriaPD72cENJFp8ezr9wJJ-l2VSHua3VA',
      // v: 'OPTIONAL VERSION NUMBER',
      // libraries: 'places', //// If you need to use place input 
    }
  });



Vue.prototype.moment = moment;

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
