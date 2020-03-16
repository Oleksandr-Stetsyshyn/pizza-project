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
        <b-navbar-item
          tag="router-link"
          :to="{ path: '/addIngredients/constructor' }"
        >Створити власну</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/stock' }">Акції</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/delivery' }">Доставка і оплата</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">Про нас</b-navbar-item>

        <b-navbar-dropdown label="Адмін меню">
          <b-navbar-item tag="router-link" :to="{ path: '/addPizza' }">Додати рецепт</b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <!-- <a class="button is-primary" >
              <strong>Вхід</strong>
            </a>-->
            <router-link class="button is-primary" tag="button" to="/login">
              <strong>Вхід</strong>
            </router-link>
            <router-link class="button is-light" tag="button" to="/basket">
              <strong>Приготувати</strong>
            </router-link>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view></router-view>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Pizza by "Riccio di Mare"</strong> by
          <a href="https://jgthms.com">Oleksandr Stetsyshyn</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
