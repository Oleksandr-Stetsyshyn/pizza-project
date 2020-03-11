<template>
  <div>
    Ось ця піцца: {{pizzaId}}

    
   </div>
</template>

<script>
export default {
  name: "AddIngredients",

  computed: {
 
    pizzaId() {
      return this.$route.params.pizzaId;
    }
  }

};
</script>

<style lang="scss" scoped>
</style>