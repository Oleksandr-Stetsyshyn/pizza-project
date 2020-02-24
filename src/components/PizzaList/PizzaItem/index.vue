<template>
  <div>
    <h2>{{ pizza.name }}</h2>
<<<<<<< HEAD
    <h3>Ціна: {{ pizza.price }} грн</h3>

    <img :src="imgPath" />
    <img src="@/assets/images/1.jpg" />
    <!-- <img src=`require(../assets/images/${id}.jpg)` />1-->
=======
    <!-- <img :src="imgPath" />
    <img src="@/assets/images/1.jpg" />
    <img src=`require(../assets/images/${id}.jpg)` /> -->
>>>>>>> 3f8c520cee04f7fff0eed55bf7e49af4ce20954f
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