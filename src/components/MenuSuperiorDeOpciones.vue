<template>
  <div class="fixed-top">
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-brand class="text-white" href="/">HOME</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="text-white" to="/ordenados/diametro">Ordenados por Diametro</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit.prevent="buscar">
          <b-form-input v-model="buscado" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button  size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  data(){
    return {
buscado:''
//Si no pongo el .prevent en @submit me recarga la pagina, pero no busca se puede tambien con el e.preventDefault()
    }
  },
methods:{
  buscar(){
window.location.href=`/${this.buscado}`
  }
}
  
}
</script>

<style>

</style>