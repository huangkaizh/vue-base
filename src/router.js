import Vue from 'vue'
import Router from 'vue-router'

const PageA = resolve =>
  require.ensure([], () => resolve(require('./pages/pageA.vue')), 'PageA')
const PageB = resolve =>
  require.ensure([], () => resolve(require('./pages/pageB.vue')), 'PageB')
const PageC = resolve =>
  require.ensure([], () => resolve(require('./pages/pageC.vue')), 'PageC')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pageA'
    },
    {
      name: 'pageA',
      path: '/pageA',
      component: PageA
    },
    {
      name: 'pageB',
      path: '/pageB',
      component: PageB
    },
    {
      name: 'pageC',
      path: '/pageC',
      component: PageC
    }
  ]
})
