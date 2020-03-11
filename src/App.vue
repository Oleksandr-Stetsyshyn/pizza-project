<template>
  <div id="app">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="https://webcomicms.net/sites/default/files/clipart/136689/logo-pizza-136689-3513584.png"/>
        </b-navbar-item>
      </template>

      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/menu' }">Піца</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/addIngredients/constructor' }">Створити власну</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/stock' }">Акції</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/delivery' }">Доставка і оплата</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">Про нас</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Вхід</strong>
            </a>
            <a class="button is-light">Кошик</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
