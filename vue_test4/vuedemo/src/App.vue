<template>
  <div id="app">
    <p v-text='title'></p>
    <router-view/>
  </div>
 
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      title: "Don't be realistic"
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
