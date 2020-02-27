<template>
  <div>
    <h2>{{ pizza.name }}</h2>
    <img :src="imgPath" />
    <li v-for="item in pizza.ingredients" :key="item.id">{{ item.id }}</li>
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