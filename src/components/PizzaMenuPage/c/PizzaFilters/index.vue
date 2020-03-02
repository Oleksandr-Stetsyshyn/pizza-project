<template>
  <div>
    <li v-for="(ingredientInfo, index) in ingredientsList" :key="index">
      
      <input type="checkbox" :value="ingredientInfo.id" v-model="checkedIngredient" />
      {{ ingredientInfo.name }}
    </li>
    <br />
    <span>Перевірка що обрано: {{ checkedIngredient }}</span>
    <br />
    <br />
    <button @click="clcFilter">Фільтрувати</button>
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

  methods: {
    clcFilter() {
      this.$emit("clickFilterBtn", this.checkedIngredient)
    }
  }
};
</script>

<style lang="css" scoped>
</style>