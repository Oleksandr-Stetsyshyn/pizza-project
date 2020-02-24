<template>
  <div>
    <h2>{{ pizza.name }}</h2>
    <img src="@/assets/images/1.jpg" />
    <h4>Ціна: {{ pizza.price }}грн</h4>
    <img :src="imgPath" />
    <!-- <img src=`require(../assets/images/${id}.jpg)` /> -->
    <li v-for="(value, name) in pizza.ingredients" :key="name">{{name}}</li>
  </div>
</template>

<script>
export default {
  name: "PizzaItem",

  props: {
    pizza: {
      type: Object
    },

    computed: {
      imgPath() {
        return `@/assets/images/${this.pizza.id}`; //немтудом
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>