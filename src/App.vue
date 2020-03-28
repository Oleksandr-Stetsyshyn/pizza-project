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
          :to="{ path: '/addIngredientsToItem/constructor' }"
        >Створити власну</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/stock' }">Акції</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/delivery' }">Доставка і оплата</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">Про нас</b-navbar-item>

        <b-navbar-dropdown label="Адмін меню">
          <b-navbar-item tag="router-link" :to="{ path: '/addPizza' }">Додати рецепт</b-navbar-item>
          <b-navbar-item
            tag="router-link"
            :to="{ path: '/addNewIngredient' }"
          >Додати новий інгрідієнт</b-navbar-item>
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

            <section>
              <button
                class="button is-primary is-medium"
                @click="isComponentModalActive = true"
              >Вхід</button>

              <b-modal
                :active.sync="isComponentModalActive"
                has-modal-card
                full-screen
                :can-cancel="false"
              >
                <modal-form v-bind="formProps"></modal-form>
              </b-modal>
            </section>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view></router-view>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Pizza by "Riccio di Mare"</strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

const ModalForm = {
  props: ["email", "password"],
  template: `<div class="modal-card" style="width: auto">
                <header class="modal-card-head">
                    <p class="modal-card-title">Login</p>
                </header>
                <section class="modal-card-body">
                    <b-field label="Email">
                        <b-input
                            type="email"
                            :value="email"
                            placeholder="Your email"
                            required>
                        </b-input>
                    </b-field>

                    <b-field label="Password">
                        <b-input
                            type="password"
                            :value="password"
                            password-reveal
                            placeholder="Your password"
                            required>
                        </b-input>
                    </b-field>

                    <b-checkbox>Remember me</b-checkbox>
                </section>
                <footer class="modal-card-foot">
                    <button class="button" type="button" @click="$parent.close()">Close</button>
                    <button class="button is-primary">Login</button>
                </footer>
            </div>`
};

export default {
  name: "App",

  components: {
    ModalForm
  },
  data() {
    return {
      isComponentModalActive: false,
      formProps: {
        email: "evan@you.com",
        password: "testing"
      }
    };
  },
  computed: {
    ...mapGetters("cart", ["getProductsCountInCart"]),
    cartLenght() {
      return this.getProductsCountInCart();
    }
  }
};
</script>

<style>
</style>
