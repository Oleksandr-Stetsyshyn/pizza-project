<template>
  <div>
    <section>
    <span>Обрано: {{ checkedIngredient }}</span>
     
      <b-field v-for="(ingredientInfo, index) in ingredientsList" :key="index">
        <b-checkbox-button
          v-model="checkedIngredient"
          :native-value="ingredientInfo.id"
          type="is-success"
        >
          <!-- <b-icon icon="check"></b-icon> -->
          <img :src="require(`@/assets/images/ingredients/${ingredientInfo.id}.jpg`)" width="20" />
          <span>{{ ingredientInfo.name }}</span>
        </b-checkbox-button>
      </b-field>
    </section>
  </div>
</template>

<script>
export default {
  name: "PizzaFilters",

  props: {
    ingredientsList: {
      type: Array,
      default: () => {}
    }
  },

  data() {
    return {
      checkedIngredient: []
    };
  },

  watch: {
    checkedIngredient() {
      this.$emit("clickFilterBtn", this.checkedIngredient);
    }
  }

};
</script>

<style lang="css" scoped>
</style>