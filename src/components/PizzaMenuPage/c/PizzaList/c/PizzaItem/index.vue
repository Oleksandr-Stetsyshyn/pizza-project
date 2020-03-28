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
        <li v-for="item in pizza.ingredients" :key="item">
          <img :src="require(`@/assets/images/ingredients/${item}.jpg`)" width="20" />
          {{item}}
        </li>
       </div>
      <h3>{{ pizza.price }} Грн.</h3>
      <div>
        <router-link
          class="button is-text is-right"
          tag="button"
          :to="`/addIngredients/${pizza.id}`"
        >
          <strong>+інгрідієнт</strong>
        </router-link>
        <button class="button is-success" tag="button" @click="onAddToCart(pizza.id)">
          <strong>Замовити</strong>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    onAddToCart(id) {
      this.addProductToCart(id);
    }
  }
};
</script>

<style lang="css" scoped>
.card {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>