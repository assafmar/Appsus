import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EmailApp from '@/components/email/EmailApp'
import MapApp from '@/components/maps/MapApp'
import BookList from '@/components/books/BookList.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmailApp',
      component: EmailApp
    },
    {
      path: '/map',
      name: 'MapApp',
      component: MapApp
    },
    {
      path: '/book',
      name: 'BookApp',
      component: BookList
    }
  ]
})
