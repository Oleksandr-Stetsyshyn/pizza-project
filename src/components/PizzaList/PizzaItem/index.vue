<template>
  <div>
    <h2>{{ pizza.name }}</h2>
    <img :src="imgPath" />
    {{pizza.id}}
    <!-- <img src="@/assets/images/1.jpg" /> 
    <img :src="require(`@/assets/images/${id}.jpg`)" />-->
    <li v-for="(value, name) in pizza.ingredients" :key="name">{{name}}</li>
  </div>
</template>

<script>
export default {
  name: "PizzaItem",

  props: {
    pizza: {
      type: Object
    }
  },
  computed: {
    imgPath() {
      // console.log('this.pizza.id');
      // console.log(this.pizza.id);
      return require(`@/assets/images/${this.pizza.id}.jpg`);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>