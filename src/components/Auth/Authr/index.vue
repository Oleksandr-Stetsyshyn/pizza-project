<template>
  <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" />

    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Ввійти</p>
      </header>
      <section class="modal-card-body">

  <b-field label="Логін"
            label-position="on-border"
            type="is-success"
            message="This username is available">
            <b-input value="Vitalik" maxlength="30"></b-input>
        </b-field>

        <b-field label="Email">
          <b-input type="email" :value="email" placeholder="Your email" required></b-input>
        </b-field>

        <b-field label="Пароль">
          <b-input
            type="password"
            :value="password"
            password-reveal
            placeholder="Your password"
            required
          ></b-input>
        </b-field>

        <b-checkbox>Запам'ятати мене</b-checkbox>
      </section>
      <footer class="modal-card-foot">
       <button class="button" type="button" @click="goBack()">Закрити</button>  <!-- КЛАСНА КНОПКА -->
        <button class="button is-primary">Вхід</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name:'Authr',
data() {
  return {
   
  }
},

  computed: {
    name() {
      return this.data 
    }
  },
  methods: {
    goBack() {
      window.history.back();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>