import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import SignIn from './pages/enter/SignIn.vue'
import SignUp from './pages/enter/SignUp.vue'
import App from './App.vue'
import IntroPage from './pages/IntroPage.vue'
import PersonalArea from './pages/personal-area/PersonalArea.vue'
import i18n from './i18n'
import Error from './pages/Error.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'introPage',
      component: IntroPage
    },
    {
      path: '/user',
      name: 'personalArea',
      component: PersonalArea
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

