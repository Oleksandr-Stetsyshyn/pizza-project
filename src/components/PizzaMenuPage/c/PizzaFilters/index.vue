<template>
  <div>
    <li class="checkbox column is-narrow" v-for="(ingredientInfo, index) in ingredientsList" :key="index">
      <input type="checkbox" :value="ingredientInfo.id" v-model="checkedIngredient" />
      <img :src='require(`@/assets/images/ingredients/${ingredientInfo.id}.jpg`)' width="40"/>
      {{ ingredientInfo.name }}
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

  

  // methods: {
  //   clcFilter() {
  //     this.$emit("clickFilterBtn", this.checkedIngredient);
  //   }
  // }
};
</script>

<style lang="css" scoped>
</style>