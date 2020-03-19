<template>
  <div class="card column is-narrow" style="width: 350px;">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="imgPath" />
      </figure>
    </div>
    <div class="card-content">
      <h3>{{ pizza.name }}</h3>

      <div class="content">
        <h6>Склад:</h6>
        <li v-for="item in pizza.ingredients" :key="item">{{item}}, </li>
        <!-- <img :src='require(`@/assets/images/ingredients/${item}.jpg`)' width="40"/> -->
        
      </div>

      <div>
      <router-link class="button is-text is-right" tag="button" :to="`/addIngredients/${pizza.id}`">
        <strong>+інгрідієнт</strong>
      </router-link>

        <router-link class="button is-success" tag="button" to="/">
        <strong>Замовити</strong>
      </router-link>
   
      
      </div>
    </div>
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

<style lang="css" scoped>
.card {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>