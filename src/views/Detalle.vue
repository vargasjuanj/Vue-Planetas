<template>
<div>
<b-container class=" border border-dark">
  <b-row>
    <b-col>
        <b-row><img :src="`/img/${encontrado.img}`"> </b-row>

        <b-row class="border-top bordar-dark" >{{encontrado.nombre}}</b-row>
   </b-col>

    <b-col class=" border-left border-dark">
         <b-row>
            <b-col>
                 <p class="font-weight-bold">Diametro KM:</p>
                  <p class="font-weight-bold">Rotacion</p>
                   <p class="font-weight-bold">Temperatura:</p>
                   <p class="font-weight-bold">Satelites:</p>
                 </b-col>
             <b-col>
                 
                   <p>{{encontrado.diametro}}</p>
                    <p>{{encontrado.rotacionDias}}</p>
                   <p>{{encontrado.temperatura}}</p>
                   <ul v-if="encontrado.satelites.length!=0">
                       <li style="list-style:none" v-for="(element,index) in encontrado.satelites" :key="index">{{element}}</li>
                    </ul>
                    <h6 v-else>NO POSEE</h6>
                  </b-col>
         </b-row>

        <b-row> 
            <b-col>
                <p class="text-left font-weight-bold">Descripción:</p>
                <p class="text-justify">{{encontrado.descripcion}}</p>

            </b-col>

        </b-row>
    </b-col>
  </b-row>

</b-container>
  <a class="btn btn-lg my-4 btn-outline-danger"  @click.prevent="back">VOLVER</a>
</div>
</template>

<script>
import datos from '../assets/json/sistema_solar.json'
export default {
mounted(){
    console.log(this.encontrado)
},
computed:{
    encontrado(){
        return datos.find(element=>element.codigo==Number(this.$route.params.codigo))
    }
},methods:{
    back(e){
    
console.log(e)
        window.history.back()
       // window.history.go(-1)
    }
}
}
</script>

<style>

</style>