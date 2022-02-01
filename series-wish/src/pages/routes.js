export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue')
  }
]