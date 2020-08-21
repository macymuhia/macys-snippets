import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/views/landing/LandingPage';
import JavaPage from '@/views/java/JavaPage';
import PythonPage from '@/views/python/PythonPage';
import JavascriptPage from '@/views/javascript/JavascriptPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/java',
      name: 'JavaPage',
      component: JavaPage
    },
    {
      path: '/python',
      name: 'PythonPage',
      component: PythonPage
    },
    {
      path: '/javascript',
      name: 'JavascriptPage',
      component: JavascriptPage
    },
  ]
});
