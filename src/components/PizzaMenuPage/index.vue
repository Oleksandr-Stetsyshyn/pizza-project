<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-2">
      <h2>Меню піц</h2>

      <pizza-filters
        :ingredientsList="ingredients"
        @clickFilterBtn="filterByIngredients"
        class="filter"
      />
    </div>

    <div class="column">
      <pizza-list :pizzaList="filteredPizzaList" class="content" />
    </div>
  </div>
</template>

<script>
import PizzaFilters from "@/components/PizzaMenuPage/c/PizzaFilters";
import PizzaList from "@/components/PizzaMenuPage/c/PizzaList";

import PizzaDataArr from "@/constants/constPizzaData.js";
import IngredientsDataArr from "@/constants/constIngredients.js";

import { mapGetters } from "vuex";

export default {
  name: "PizzaMenuPage",
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
      if (this.filteredPizzaList.length == 0) {
        this.filteredPizzaList.push(this.pizzaReceptsArr[0]);
      }
    }
  },
 


  computed: {
    ...mapGetters("pizzaRecipe", ["getPizzaList"]),
    list() {
      return this.getPizzaList();
    }
  },
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
</style>
