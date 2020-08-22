import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  {
    path: '/:buscado', //Es necesario el /home/ porque si no cuando valla a la ruta a una ruta /.. por eje /ordenados lo va a tomar como un parametro y no una ruta, ademas para que no salte el cartel de ruta duplicada le cambio el nombre a HomeBusqueda
    name: 'HomeBusqueda', //Pero en cambio a ordenadas se le agrego /ordenadas/diametro para no perder la función de que al apretar buscar sin ningun parametro me devuelva todos los datos, hay que elegir que se quiere, uqe no devuelva nada o todos , si no hay nada escrito en el input
    component: Home
    },
  {
    path: '/detalle/:codigo',
    name: 'Detalle',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Detalle.vue')
  },
  {
    path: '/ordenados/diametro',
    name: 'OrdenadosPorDiametro',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OrdenadosPorDiametro.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
