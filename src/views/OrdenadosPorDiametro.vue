<template>
  <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Diametro</th>
    </tr>
  </thead>
  <tbody>
    <tr :key="element.codigo" v-for="element in datosOrdenados">
      <th scope="row">{{element.codigo}}</th>
      <td>{{element.nombre}}</td>
     <td>{{element.diametro}}</td>
  
    </tr>
  </tbody>
</table>
<div>


</div>
  </div>
</template>

<script>
import datos from '../assets/json/sistema_solar.json'
export default {
computed:{
    datosOrdenados(){
        return datos.sort((a,b)=>b.diametro-a.diametro)
    }
  
    
}

}
</script>

<style>

</style>