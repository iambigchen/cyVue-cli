/**
 * Created by zhangtao on 2017/12/26
 * Description router-core
 */
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Demo from './demo/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {title: 'power'},
      // redirect: {name: 'BookSignList'},//默认页面路由
      component: Home,
      children: [
        Demo
        //子路由
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  //百度统计pv统计
  if (window._hmt) {
    window._hmt.push(['_trackPageview', `${window.location.pathname}${window.location.hash}`])
  }
  //title控制
  let projectName = ''
  switch (true) {
    case /\/sign\//.test(to.path) :
      projectName = '一手签约'
      break
    case /\/finance\//.test(to.path) :
      projectName = '财务'
      break
  }
  let tit = to.meta.title
  let ex = to.meta.extraTitle
  if (ex) {
    let keys = Object.keys(ex).reverse()
    if (keys.length > 0) {
      for (let idx in keys) {
        if (to.params[keys[idx]] !== undefined) {
          tit = ex[keys[idx]]
          break
        }
      }
    }
  }
  document.title = projectName ? projectName + '-' + tit : tit
  next()
})

export default router
