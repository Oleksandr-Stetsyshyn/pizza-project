<template>
  <div>
    <h2>{{ pizza.name }}</h2>
<<<<<<< HEAD
    <img src="@/assets/images/1.jpg" />
    <h4>Ціна: {{ pizza.price }}грн</h4>
    <img :src="imgPath" />
    <!-- <img src=`require(../assets/images/${id}.jpg)` /> -->
=======
    <!-- <img :src="imgPath" />
    <img src="@/assets/images/1.jpg" />
    <img src=`require(../assets/images/${id}.jpg)` /> -->
>>>>>>> 7ab4c5a9da13d34254ffc0fcbdc4ec79b022648c
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