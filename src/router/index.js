import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EmailApp from '@/components/email/EmailApp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmailApp',
      component: EmailApp
    }
  ]
})
