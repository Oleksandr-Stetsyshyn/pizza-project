<template>
  <div>
    <h2>{{ pizza.name }}</h2>
    <img :src="imgPath" />
    <!-- <li v-for="item in pizza.ingredients" :key="item.id">{{ item.id }}</li> -->
    <li v-for="item in pizza.ingredients" :key="item">{{ item }}</li>
    <router-link :to="`/addIngredients/${pizza.id}`">Додати інгрідієнт</router-link>

    <br />
    <button>Замовити</button>
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
      return require(`@/assets/images/${this.pizza.id}.png`);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>