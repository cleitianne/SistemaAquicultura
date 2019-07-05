import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import '..scss/custom.scss'
import 'bootstrap/dist/css/bootstrap.min.css';




//import store from './store';
//import Mgr from '@/services/SecurityService';
//import StarRating from 'vue-star-rating';

import App from './App.vue'

import AddItem from './components/AddItem.vue'
import EditItem from './components/EditItem.vue'
import ListItem from './components/ListItem.vue'
import Home from './components/Home.vue'
import AddTanque from './components/AddTanque.vue'
import EditTanque from './components/EditTanque.vue'
import ListTanque from './components/ListTanque.vue'
import Dashboard from './components/Dashboard.vue'

import '../node_modules/nprogress/nprogress.css'

Vue.use(VueFire)
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
        name: 'Add',
        path: '/add',
        component: AddItem
  },
  {
      name: 'Edit',
      path: '/edit/:id',
      component: EditItem
  },
  {
      name: 'List',
      path: '/index',
      component: ListItem
  },
  {
    name: 'AddTanque',
    path: '/addTanque',
    component: AddTanque
  },
  {
    name: 'EditTanque',
    path: '/editTanque/:id',
    component: EditTanque
  },
  {
    name: 'ListTanque',
    path: '/index',
    component: ListTanque
  },
  {
    name: 'Dashboard',
    path: '/painel',
    component: Dashboard
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
