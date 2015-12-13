import Vue from 'vue'
import VueRouter from 'vue-router'

// Layouts
import App from './components/layouts/app.vue'

// Helpers
import Menu from './components/helpers/menu.vue'

import Aloha from './components/helpers/menu.vue'
window.Aloha = Aloha
// Pages
import Home from './components/pages/home.vue'
import Catalog from './components/pages/catalog.vue'

// Errors
import NotFound from './components/errors/404.vue'

import './stylesheets/style.sass'

// Code
Vue.config.debug = process.env.NODE_ENV !== 'production'
Vue.use(VueRouter)

// Register components
Vue.component('Menu', Menu)

var router = new VueRouter()

// Routes

router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/catalogs': {
    name: 'catalog',
    component: Catalog
  },
  '*': {
    name: 'not-found',
    component: NotFound
  }
});

router.start(App, '#app')
