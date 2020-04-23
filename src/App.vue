<template>
  <div id="app">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://webcomicms.net/sites/default/files/clipart/136689/logo-pizza-136689-3513584.png"
          />
        </b-navbar-item>
      </template>

      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/menu' }">Піца</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/stock' }">Акції</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/delivery' }">Доставка і оплата</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">Про нас</b-navbar-item>
        <b-navbar-item tag="router-link" v-if="!userLogedIn" :to="{ path: '/login' }">Логін</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/register' }">Реєстрація</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/authr' }">АВТОРИЗАЦІЯ</b-navbar-item>

        <b-navbar-dropdown label="Адмін меню">
          <b-navbar-item tag="router-link" :to="{ path: '/addPizza' }">Додати рецепт</b-navbar-item>
          <b-navbar-item
            tag="router-link"
            :to="{ path: '/addNewIngredient' }"
          >Редагування інгредієнтів</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <router-link class="button is-light" tag="button" to="/basket">
              <strong>
                Готувати
                <b-tag type="is-warning is-rounded">{{ getProductsCountInCart }}</b-tag>піц
              </strong>
            </router-link>

            <!-- <router-link class="button is-primary" tag="button" to="/login">
              <strong>Вхід</strong>
            </router-link>-->
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view></router-view>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>
            Pizza "Riccio di Mare" by
            <a href="https://www.linkedin.com/in/stetsyshyn/">Oleksandr Stetsyshyn</a> looking for work
          </strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",

  computed: {
    ...mapGetters("cart", ["getProductsCountInCart"]),
    cartLenght() {
      return this.getProductsCountInCart();
    },

    userLogedIn() {
      return this.$store.getters.user;
    }
  }
};
</script>

<style>
</style>
