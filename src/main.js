import Vue from 'vue/dist/vue.common';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h('router-view')
}).$mount('#app');