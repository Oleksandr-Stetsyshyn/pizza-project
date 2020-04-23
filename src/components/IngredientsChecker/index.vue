<template>
  <div>
    <section>
      <b-field label="Обреріть інгредієнти">
        <b-taginput v-model="checkedIngredient" ellipsis icon="label" placeholder="обрати ще"></b-taginput>
      </b-field>

      <div class="columns is-multiline is-mobile">
        <b-field v-for="ingredient in getIngredientsList" :key="ingredient.id">
          <div class="column">
            <b-checkbox-button
              v-model="checkedIngredient"
              :native-value="ingredient.id"
              type="is-success"
            >
              <!-- <b-icon icon="check"></b-icon> -->
              <img v-if="ingredient.img" :src="ingredient.img" class="img" width="20" />
              <span>{{ ingredient.name }}</span>
            </b-checkbox-button>
          </div>
        </b-field>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

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
 
    ...mapGetters(["getIngredientsList", "isLoading", "isError"])
  },

  methods: {
    ...mapActions(["loadIngredientsList"])
  },

  mounted() {
    this.loadIngredientsList();
  }
};
</script>

<style lang="css" scoped>
</style>