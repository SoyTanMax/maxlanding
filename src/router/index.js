import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ReadMore from 'vue-read-more'
import 'vue-video-section/dist/vue-video-section.css'
import VueVideoSection from 'vue-video-section'

Vue.use(Router)
Vue.use(ReadMore)
Vue.component('vue-video-section', VueVideoSection)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
