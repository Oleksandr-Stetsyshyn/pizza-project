<template>
  <div>
    Змінити рецепт піцци {{pizzaReceptsArr[pizzaIndex].name}}
    <li v-for="item in pizzaReceptsArr[pizzaIndex].ingredients" :key="item">{{ item }}</li>
 
 
  </div>
</template>

<script>
import PizzaDataArr from "@/constants/constPizzaData.js";

export default {
  name: "AddIngredients",

  data() {
    return {
      pizzaReceptsArr: PizzaDataArr
    };
  },

  computed: {
    pizzaIndex() {
      // return this.$route.params.pizzaId; шукаю індех елемента по id
      return this.pizzaReceptsArr
        .map(function(e) {
          return e.id;
        })
        .indexOf(this.$route.params.pizzaId);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>