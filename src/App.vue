<template>
  <div id="app">
   <pizza-filters/>

    <h1>Меню піц</h1>
    <pizza-list  :pizzaList="products" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PizzaFilters from '@/components/PizzaFilters'
import PizzaList from '@/components/PizzaList'

import PizzaDataArr from "@/constants/constPizzaData.js"; //база даних

export default {
  name: 'App',
  components: {
    // HelloWorld,
    PizzaFilters,
    PizzaList
  },

  data() {
    return {
       products: PizzaDataArr 
       };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
