<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8 container is-widescreen">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">Новий рецепт</p>
            <p class="subtitle">Вітаю, Шеф, що будемо сьогодні готувати?</p>
            <figure class="image is-4by3">
              <img
                src="https://scontent.fiev2-1.fna.fbcdn.net/v/t1.0-9/43530816_1096167020563985_4321571727885729792_n.jpg?_nc_cat=103&_nc_sid=8024bb&_nc_oc=AQnAre7QFI01nnYXf5jnBj-ZQRzG0ipODRp3YR13E8JimCCoJvh64Gs5kYboct_qQeE&_nc_ht=scontent.fiev2-1.fna&oh=3c414ba62f804be2029e3e4fc4b77c54&oe=5EA1335D"
              />
            </figure>

            <div class="content">Доброго дня піцоло, що будемо сьогодні готувати?</div>

            <div>
              <div>
                <b-field horizontal label="Назва піцци">
                  <b-input type="text" v-model="title" required expanded></b-input>
                </b-field>
                <b-field horizontal label="Фото лінк">
                  <b-input type="text" v-model="imageSrc" required expanded></b-input>
                </b-field>
                <b-field horizontal label="Ціна">
                  <b-input type="number" v-model="price" required expanded></b-input>
                </b-field>

                <div>
                  Оберіть інгрідієнти
                  <pizza-filters
                    class="tile is-vertical is-5 container is-widescreen"
                    :ingredientsList="ingredients"
                    @clickFilterBtn="filterByIngredients"
                  />
                </div>
              </div>
              <div class="level">
                <b-button type="is-danger" class="level-left" @click="onCancel">Cancel</b-button>
                <b-button
                  type="is-success"
                  class="level-right"
                  :disabled="!isDataValid"
                  @click="onAdd"
                >Add</b-button>
              </div>
            </div>
          </article>
        </div>
      </div>
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
