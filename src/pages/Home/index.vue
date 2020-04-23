<template>
  <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <b-carousel>
      <b-carousel-item v-for="(item, i) in 6" :key="i">
        <span class="image">
          <img :src="getImgUrl(i+1)" />
        </span>
      </b-carousel-item>
    </b-carousel>

<div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        Популярна піца
      </p>
      <p class="subtitle">
        Наша піца найкраща
      </p>
    </div>
  </div>


    <div class="column">
      <pizza-list :pizzaList="pizzaReceptsArr" class="content" />
    </div>
  </div>
</template>

<script>
import PizzaList from "@/components/PizzaMenuPage/c/PizzaList";
import PizzaDataArr from "@/constants/constPizzaData.js";

export default {
  name: "Home",
  components: {
    PizzaList
  },
  data() {
    return {
      pizzaReceptsArr: PizzaDataArr
    };
  },
  methods: {
    getImgUrl(value) {
      return require(`@/assets/images/${value}.jpg`);
      //  return `https://picsum.photos/id/43${value}/1230/500`
    }
  }
};
</script>

<style>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
</style>