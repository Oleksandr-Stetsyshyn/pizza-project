<template>
  <section>
    <h1>Заповніть характеристики інгредієнта</h1>
    <b-field>
      <b-input placeholder="Id" type="text" v-model="id" required></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="Назва" type="text" v-model="name" required></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="Ціна" type="number" min="3" max="90" v-model="price" required></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="Вага" type="number" min="5" max="250" v-model="weight" required></b-input>
    </b-field>
    <b-field>
      <b-input placeholder="Фото лінк" type="url" v-model="img"></b-input>
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

     <div class="level">
                <b-button type="is-danger" class="level-left" @click="onCancel">Cancel</b-button>
                <b-button
                  type="is-success"
                  class="level-right"
                  :disabled="!isDataValid"
                  @click="onSave"
                >Add</b-button>
              </div>
  </section>
</template>

<script>
import store from "@/store";

export default {
  name: "AddNewIngredient",
  data() {
    return {
      id: null,
      name: null,
      price: null,
      weight: null,
      species: null,
      img: null,
    };
  },
  computed: {
    isDataValid() {
      return this.id && this.name && this.price > 0 && this.weight && this.species && this.img;
    }
  },

  methods: {
    onSave() {
      store.addProduct(this.id && this.name && this.price > 0 && this.weight && this.species && this.img);
    },
    onCancel() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>