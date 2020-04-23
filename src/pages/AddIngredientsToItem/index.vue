<template>
  <div>
    Змінити рецепт піцци {{pizzaReceptsArr[pizzaIndex].name}}
    <li v-for="item in pizzaReceptsArr[pizzaIndex].ingredients" :key="item">{{ item }}

       <b-field label="Fan">
            <b-slider :min="0" :max="3" aria-label="Fan" :tooltip="false">
                <b-slider-tick :value="0">Убрати </b-slider-tick>
                <b-slider-tick :value="1">Low</b-slider-tick>
                <b-slider-tick :value="2">High</b-slider-tick>
                <b-slider-tick :value="3">Auto</b-slider-tick>
            </b-slider>
        </b-field>


        
    </li>
 
 
  </div>
</template>

<script>
import PizzaDataArr from "@/constants/constPizzaData.js";

export default {
  name: "AddIngredientsToItem",

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