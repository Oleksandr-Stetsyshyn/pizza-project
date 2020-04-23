<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8 container is-widescreen">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <p class="title">Редагування інгредієнтів</p>
            <p class="subtitle">Додайте новий інгредієнт</p>
            <!-- <figure class="image is-4by3">
              <img
                src="https://i.pinimg.com/originals/b3/1c/4b/b31c4bc469e7dd9f1fb9e55cfa1a5730.jpg"
              />
            </figure>-->
            <div class="content">
              
                <section>
                  <b-field>
                    <b-input placeholder="Id" type="text" v-model="ingredientId" required></b-input>
                  </b-field>
                  <b-field>
                    <b-input placeholder="Назва" type="text" v-model="name" required></b-input>
                  </b-field>
                  <b-field>
                    <b-input
                      placeholder="Ціна"
                      type="number"
                      min="3"
                      max="90"
                      v-model="price"
                      required
                    ></b-input>
                  </b-field>

                  <h3>Категорія:</h3>
                  <div class="block">
                    <b-radio v-model="species" name="name" native-value="sauces">Соуси</b-radio>
                    <b-radio v-model="species" name="name" native-value="cheeses">Сири</b-radio>
                    <b-radio v-model="species" name="name" native-value="vegetables">Зелень</b-radio>
                    <b-radio v-model="species" name="name" native-value="meat">Мясо і риба</b-radio>
                  </div>
                  <p class="content">
                    <b>Selection:</b>
                    {{ species }}
                  </p>

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


                    
                    <tr v-for="ingredient in getIngredientsList" :key="ingredient.id">
                      <td>{{ ingredient.id }}</td>
                      <td>{{ ingredient.name }}</td>
                      <td>{{ ingredient.price }}</td>
                      <td>
                        <img v-if="ingredient.img" :src="ingredient.img" class="img" />
                      </td>
                      <td>
                        <button @click="onDelete(ingredient.id)">Видалити</button>
                        <button @click="onEdit(ingredient)">Редагувати</button>
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

export default {
  name: "AddNewIngredient",

  data() {
    return {
      ingredientId: null,
      name: null,
      price: null,
      species: null,
      img: null,
      tmpImage: null
    };
  },
  computed: {
    ...mapGetters(["getIngredientsList", "isLoading", "isError"]),

    buttonTitle() {
      return this.ingredientId ? "Save" : "Add";
    },

    isDataValid() {
      return (
        this.ingredientId &&
        this.name &&
        this.price > 0 &&
        // this.weight &&
        this.species
      );
    }
  },

  methods: {
    ...mapActions([
      "loadIngredientsList",
      "saveIngredient",
      "deleteIngredient"
    ]),

    onSave() {
      this.saveIngredient({
        ingredientId: this.ingredientId,
        name: this.name,
        price: this.price,
        // weight: this.weight,
        species: this.species,
        img: this.tmpImage
      });
      this.clearData();
    },

    clearData() {
      this.ingredientId = null;
      this.name = null;
      this.price = null;
      // this.weight = null;
      this.species = null;
    },

    onDelete(id) {
      this.deleteIngredient({ id });
      // this.clearData();
    },

    onEdit(ingredient) {
      this.ingredientId = ingredient.id;
      this.name = ingredient.name;
      this.price = ingredient.price;
      this.species = ingredient.species;
      this.tmpImage = ingredient.img;
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
    this.loadIngredientsList();
  }
};
</script>

<style scoped>
.img {
  width: 64px;
}
</style>