<template>
  <div class="columns is-gapless is-multiline is-mobile">
    <pizza-item v-for="(pizza,index) in pizzaList" :key="index" :pizza="pizza" />
  </div>
</template>

<script>
import PizzaItem from "./c/PizzaItem";

export default {
  name: "PizzaList",
  components: {
    PizzaItem
  },

  props: {
    pizzaList: {
      type: Array,
      default: () => {}
    }
  }
};
</script>

<style lang="css" scoped>

</style>