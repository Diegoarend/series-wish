export default [
  {
    path:'serie/:id',
    name:'showserie',
    component: () => import(/* webpackChunkName: "showserie" */ './ShowSerie')
  }
]