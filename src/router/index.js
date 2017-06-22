import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import EmailApp from '@/components/email/EmailApp'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


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
