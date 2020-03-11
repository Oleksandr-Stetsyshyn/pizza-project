<template>
  <div class="card column is-narrow" style="width: 350px;">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="imgPath" />
      </figure>
    </div>
    <div class="card-content">
      <h3>{{ pizza.name }}</h3>
      <br />
      <button>
        <router-link :to="`/addIngredients/${pizza.id}`">Додати інгрідієнт</router-link>
      </button>
      <button>Замовити</button>
      <div class="content">
        <li v-for="item in pizza.ingredients" :key="item">{{ item }}</li>
      </div>
    </div>
  </div>

  <!-- <div>
    <h2>{{ pizza.name }}</h2>
    <img :src="imgPath" />

    <li v-for="item in pizza.ingredients" :key="item.id">{{ item.id }}</li>  це для обьекта

    <li v-for="item in pizza.ingredients" :key="item">{{ item }}</li>
    <router-link :to="`/addIngredients/${pizza.id}`">Додати інгрідієнт</router-link>

    <br />
    <button>Замовити</button>
  </div>-->
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