<template>
  <div class="container">
<div class="row">
<div class="col-3 h-100 mb-3" v-for="element in datosFiltrados"  :key="element.codigo" >

  <b-card 
    :title="element.nombre"
    :img-src="`/img/${element.img}`"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 "
  >
    <router-link :to="`detalle/${element.codigo}`" class="btn btn-primary">VER DETALLES</router-link>
  </b-card>
</div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import datos from '../assets/json/sistema_solar.json'

export default {


  computed:{ //Si no meto datos en data() o en una propiedad computada, y lo pongo asi no mas en el html no va a detectar el array datos.
     datosFiltrados(){      //No llevan parametros las propiedades computadas
let buscado=this.$route.params.buscado

return buscado==undefined ? datos : datos.filter(element=>element.descripcion.toLowerCase().includes(buscado.toLowerCase()))
      
     }
  }
}
</script>
