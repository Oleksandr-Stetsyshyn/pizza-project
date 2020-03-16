<template>
  <div>
    <li class="checkbox" v-for="(ingredient, index) in ingredientsList" :key="index">
      <input type="checkbox" :value="ingredient.id" v-model="checkedIngredient" />
      <!-- <img :src="imgIngredientsPath" /> -->
      {{ingredient.name}}
    </li>

    <span>Перевірка що обрано: {{ checkedIngredient }}</span>
  </div>
</template>

<script>
export default {
  name: "PizzaFilters",

  props: {
    ingredientsList: {
      type: Array,
      default: () => {}
    }
  },

  data() {
    return {
      checkedIngredient: []
    };
  },

  watch: {
    checkedIngredient() {
      this.$emit("clickFilterBtn", this.checkedIngredient);
    }
  },

  // computed: {
  //   imgIngredientsPath() {
  //     return require(`@/assets/images/ingredients/${this.ingredient.id}.jpg`);
  //   }
  // }

  // methods: {
  //   clcFilter() {
  //     this.$emit("clickFilterBtn", this.checkedIngredient);
  //   }
  // }
};
</script>

<style lang="css" scoped>
</style>