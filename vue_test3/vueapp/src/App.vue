<template>
  <div id="app">
   <test></test>
   <car></car>
  </div>
</template>

<script>

import Test from "./components/test"
import Car from "./components/cars"

export default {
  name: 'App',
  components: {
    Test,
    Car
  }
}

// export default{
//   name: 'App',
//   components: {
//     Car
//   }
// }


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
