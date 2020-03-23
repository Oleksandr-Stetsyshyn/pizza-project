<template>
  <div>
    Ви замовили такі піцци:
    <div v-for="item in getCustomerOrder" :key="item.id">{{ item }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Basket",

  computed: {
    ...mapGetters("cart", ["getCustomerOrder"]),

    getOrderList() {
      return this.getCustomerOrder();
    }
  }
};
</script>


<style lang="scss" scoped>
</style>