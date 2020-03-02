<template>
  <div id="app">
    <h2>Меню піц</h2>
    <pizza-filters
      :ingredientsList="ingredients"
      @clickFilterBtn="filterByIngredients"
      class="filter"
    />

    <pizza-list :pizzaList="filteredPizzaList" class="content" />
  </div>
</template>

<script>
import PizzaFilters from "@/components/PizzaFilters";
import PizzaList from "@/components/PizzaList";
import PizzaDataArr from "@/constants/constPizzaData.js";
import IngredientsDataArr from "@/constants/constIngredients.js";

export default {
  name: "App",
  components: {
    PizzaFilters,
    PizzaList
  },

  data() {
    return {
      pizzaReceptsArr: PizzaDataArr,
      ingredients: IngredientsDataArr,
      filteredPizzaList: PizzaDataArr,
      isInclude: 0
    };
  },

  methods: {
    filterByIngredients(selectedIngredients) {
      if (selectedIngredients.length == 0) {
        this.filteredPizzaList = this.pizzaReceptsArr;
      } else {
        this.filteredPizzaList = [];
         for (let i = 0; i < this.pizzaReceptsArr.length; i++) {
          for (let k = 0; k < selectedIngredients.length; k++) {
            if (
              this.pizzaReceptsArr[i].ingredients.includes(
                selectedIngredients[k]
              )
            ) {
              this.isInclude++;
            }
          }
          if (selectedIngredients.length == this.isInclude) {
            this.filteredPizzaList.push(this.pizzaReceptsArr[i]);
          }
          this.isInclude = 0;
        }
      }
    }
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
div {
  background: #fc0;
}

.filter {
  position: relative;
  width: 250px;
  border-radius: 3px;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: rgb(255, 192, 74);
}

.content {
  width: calc(100% - 300px);
  padding-top: 40px;
  padding-left: 40px;
  border-left: 1px solid #e9e9e9;
}
</style>
