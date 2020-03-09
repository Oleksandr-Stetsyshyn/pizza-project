<template>
  <div>
    Hello {{pizzaId}}
    <!-- <h2>{{ pizza.name }}</h2>
    <img :src="imgPath" />
    <li v-for="item in pizza.ingredients" :key="item">{{ item }}</li>-->
  </div>
</template>

<script>
export default {
  name: "AddIngredients",

//   props: {
//     pizza: {
//       type: Object
//     }
//   },
  computed: {
    // imgPath() {
    //   return require(`@/assets/images/${this.pizza.id}.png`);
    // },
    pizzaId() {
      return this.$route.params.pizzaId;
    }
  }

  //   created() {
  //     if (this.productId) {
  //       const product = store.getProductById(this.productId);
  //       this.title = product.title;
  //       this.price = product.price;
  //     }
  //   }
};
</script>

<style lang="scss" scoped>
</style>