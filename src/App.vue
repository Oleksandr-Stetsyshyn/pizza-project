<template>
  <div id="app">
    <h1>JS-Pizza</h1>
    <pizza-filters :ingredientsList="ingredients" />
    <br />
    <h2>Меню піц</h2>
    <br />
    <pizza-list :pizzaList="products" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import PizzaFilters from "@/components/PizzaFilters";
import PizzaList from "@/components/PizzaList";
import PizzaDataArr from "@/constants/constPizzaData.js";
import IngredientsDataArr from "@/constants/constIngredients.js";

export default {
  name: "App",
  components: {
    // HelloWorld,
    PizzaFilters,
    PizzaList
  },

  data() {
    return {
      products: PizzaDataArr,
      ingredients: IngredientsDataArr
    };
  }
};
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
div {
  background: #fc0;
  padding: 20px;
}
</style>
