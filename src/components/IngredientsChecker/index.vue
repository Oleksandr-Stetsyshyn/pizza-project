<template>
  <div>
    <section>
    <span>Обрано: {{ checkedIngredient }}</span>
      <b-field v-for="ingredient in getIngredientsList" :key="ingredient.id">
        <b-checkbox-button
          v-model="checkedIngredient"
          :native-value="ingredient.id"
          type="is-success"
        >
          <b-icon icon="check"></b-icon>
          <img v-if="ingredient.img" :src="ingredient.img" class="img" width="20" />
          <span>{{ ingredient.name }}</span>
        </b-checkbox-button>
      </b-field>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions} from "vuex";

export default {
  name: "IngredientsChecker",

  props: {
    ingredientsList: {
      type: Array,
      default: () => {}
    }
  },

  data() {
    return {
      checkedIngredient: [],
      ingredientId: null,
      name: null,
      price: null,
      // weight: null,
      species: null,
      img: null,
      tmpImage: null
    };
  },

  watch: {
    checkedIngredient() {
      this.$emit("clickFilterBtn", this.checkedIngredient);
    }
  },

  computed: {
    ...mapGetters(["getIngredientsList", "isLoading", "isError"]),
   
  },

  methods: {
    ...mapActions([ "loadIngredientsList"])},

  mounted() {
    this.loadIngredientsList();
  }
};
</script>

<style lang="css" scoped>
</style>