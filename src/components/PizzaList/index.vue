<template>
  <div>
    <pizza-item v-for="(pizza,index) in pizzaList" :key="index" :pizza="pizza" />
  </div>
</template>

<script>
import PizzaItem from "@/components/PizzaList/PizzaItem";

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
div {
  float: left;
}

img {width: 100px
}
</style>