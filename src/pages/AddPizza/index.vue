<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8 container is-widescreen">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">Рецепти</p>
            <p class="subtitle">Додайте новий рецепт</p>
            <div class="content">
              <section>
                <b-field>
                  <b-input placeholder="Id" type="text" v-model="recipeId" required></b-input>
                </b-field>
                <b-field>
                  <b-input placeholder="Назва" type="text" v-model="name" required></b-input>
                </b-field>
                <b-field>
                  <b-input
                    placeholder="Ціна"
                    type="number"
                    min="50"
                    max="250"
                    v-model="price"
                    required
                  ></b-input>
                </b-field>

                <h3>Інгрідієнти:</h3>

                <IngredientsChecker @clickFilterBtn="filterByIngredients" class="filter" />

                <div>
                  Фото:
                  <input type="file" @change="onSelect" />
                  <img v-if="tmpImage" :src="tmpImage" class="img" />
                </div>
                <br />
                <div class="level">
                  <b-button type="is-danger" class="level-left" @click="onCancel">Cancel</b-button>
                  <b-button
                    type="is-success"
                    class="level-right"
                    :disabled="!isDataValid"
                    @click="onSave"
                  >{{ buttonTitle }}</b-button>
                </div>
              </section>
              <br />
              <br />
              <label>База даних інгрідієнтів підключена до firebase</label>
              <br />
              <div v-if="isLoading">Loading ...</div>
              <div v-if="isError">Помилка, їжте хліб</div>
              <div v-if="!isLoading && ! isError">
                <table border="2px">
                  <tr>
                    <td>Id</td>
                    <td>Назва</td>
                    <td>Ціна</td>
                    <td>Фото</td>
                    <td>Редагування</td>
                  </tr>
                  <tr v-for="recipe in getRecipesList" :key="recipe.id">
                    <td>{{ recipe.id }}</td>
                    <td>{{ recipe.name }}</td>
                    <td>{{ recipe.price }}</td>
                    <td>
                      <img v-if="recipe.img" :src="recipe.img" class="img" />
                    </td>
                    <td>
                      <button @click="onDelete(recipe.id)">Видалити</button>
                      <button @click="onEdit(recipe)">Редагувати</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>






<script>
// import store from "@/store";
import { mapGetters, mapActions } from "vuex";
import IngredientsChecker from "@/components/IngredientsChecker";

export default {
  name: "AddNewRecipe",
  components: {
    IngredientsChecker
  },
  data() {
    return {
      recipeId: null,
      name: null,
      price: null,
      species: null,
      img: null,
      tmpImage: null,
      selectedIngredients: null
    };
  },
  computed: {
    ...mapGetters(["getRecipesList", "isLoading", "isError"]),

    buttonTitle() {
      return this.recipeId ? "Save" : "Add";
    },

    isDataValid() {
      return (
        this.recipeId &&
        this.name &&
        this.price > 0 &&
        this.tmpImage &&
        this.selectedIngredients.length > 0
      );
    }
  },

  methods: {
     filterByIngredients(selectedIngredients) {
      this.selectedIngredients = selectedIngredients
     },

    ...mapActions(["loadRecipesList", "saveRecipe", "deleteRecipe"]),

   
    onSave() {
      this.saveRecipe({
        recipeId: this.recipeId,
        name: this.name,
        price: this.price,
        // weight: this.weight,
        species: this.species,
        img: this.tmpImage,
        ingredientsArr: this.selectedIngredients
      });
      this.clearData();
    },

    clearData() {
      this.recipeId = null;
      this.name = null;
      this.price = null;
      this.species = null;
      this.selectedIngredients = null;
    },

    onDelete(id) {
      this.deleteRecipe({ id });
      // this.clearData();
    },

    onEdit(recipe) {
      this.recipeId = recipe.id;
      this.name = recipe.name;
      this.price = recipe.price;
      this.species = recipe.species;
      this.tmpImage = recipe.img;
      this.selectedIngredients = recipe.ingredientsArr;
    },

    onCancel() {
      this.$router.push({ path: "/" });
    },
    onSelect(e) {
      console.log(e);

      const reader = new FileReader();
      const self = this;
      reader.onloadend = function(e) {
        self.tmpImage = e.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  },

  mounted() {
    this.loadRecipesList();
  }
};
</script>

<style scoped>
.img {
  width: 64px;
}
</style>