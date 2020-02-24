<template>
  <div>
    <!-- <label>
      Cheese
      <input type="checkbox" name="cheese" id />
    </label>
    <label>
      Meat
      <input type="checkbox" name="meate" id />
    </label>-->

    <label v-for="(ingredientInfo, index) in ingredientsList" :key="index">
      <input type="checkbox" :value="ingredientInfo.id" v-model="checkedIngredient" />
      {{ ingredientInfo.id }}
    </label>
    <br />
    <span>Ви обрали: {{ checkedIngredient }}</span>
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
  }
};
</script>

<style lang="scss" scoped>
</style>