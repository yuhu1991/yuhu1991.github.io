// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css' 
Vue.use(ElementUI)
// import jQuery from 'jquery';
// Vue.prototype.jQuery=jQuery;
// Object.defineProperties(Vue.prototype,{
//   "jQuery":{
//     get:function(){
//       return jQuery
//     }
//   }
// });
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: { Layout }
})
