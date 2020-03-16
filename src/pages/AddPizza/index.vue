<template>
  <div>
    <div>
      <b-field horizontal label="Назва піцци">
        <b-input type="text" v-model="title" required expanded></b-input>
      </b-field>
      <b-field horizontal label="Фото лінк(поки що)">
        <b-input type="text" v-model="imageSrc" required expanded></b-input>
      </b-field>
      <b-field horizontal label="Ціна">
        <b-input type="number" v-model="price" required expanded></b-input>
      </b-field>

      <div>
        інгрідієнти
        <pizza-filters
          :ingredientsList="ingredients"
          @clickFilterBtn="filterByIngredients"
          class="filter"
        />
      </div>

      <b-field horizontal label="Введіть інгрідієнти">
        <b-input type="textarea" v-model="description"></b-input>
      </b-field>
    </div>
    <div class="level">
      <b-button type="is-danger" class="level-left" @click="onCancel">Cancel</b-button>
      <!-- <router-link to="/" class="button is-danger" >Cancel</router-link> -->
      <b-button type="is-success" class="level-right" :disabled="!isDataValid" @click="onAdd">Add</b-button>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import IngredientsDataArr from "@/constants/constIngredients.js";
import PizzaFilters from "@/components/PizzaMenuPage/c/PizzaFilters";

export default {
  name: "AddPizza",
  components: {
    PizzaFilters
  },
  data() {
    return {
      title: null,
      imageSrc: null,
      price: null,
      description: null,
      ingredients: IngredientsDataArr
    };
  },

  computed: {
    isDataValid() {
      return this.title && this.imageSrc && this.price > 0 && this.description;
    }
  },

  methods: {
    onAdd() {
      store.addProduct(this.title, this.imageSrc, this.price, this.description);
    },
    onCancel() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
