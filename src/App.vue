<template>
  <div id="app">
    <div class="menu">
      <div>
        <router-link to="/menu">Мeню</router-link>
      </div>
      <div>
        <router-link to="/addPizza">Add new PizzaItem</router-link>
      </div>

      <div>
        <router-link to="/pizzaList">Це видалити</router-link>
      </div>
      <div>
        <router-link to="/about">Про нас</router-link>
      </div>
      <router-view></router-view>
    </div>

    <div class="bottom-panel" style="user-select: auto;">
      <div class="container" style="user-select: auto;">
        <div class="bottom-panel-phones" style="user-select: auto;">
          <div class="hours-cell" style="user-select: auto;">
            <div class="red" style="user-select: auto;">Телефон:</div>
            <div style="user-select: auto;">
              <a href="tel:+380669444030" style="user-select: auto;">
                <i class="__vodafone" style="user-select: auto;"></i>(099)
                <strong style="user-select: auto;">561-91-44</strong>
              </a>
            </div>

            <a href="#" class="cart-modal-close js-phones-close" style="user-select: auto;">
              <span class="fa fa-remove" style="user-select: auto;"></span>
            </a>
          </div>
        </div>
        <div class="bottom-panel-cart" style="user-select: auto;">
          <span class="red hidden-xs" style="user-select: auto;">Кошик:</span>
          <a href="#" class="cart-toggle animated enabled" style="user-select: auto;">
            <i class="fa fa-shopping-cart" style="user-select: auto;"></i>
            <strong class="lowercase" style="user-select: auto;">
              153,00
              <small style="user-select: auto;">грн.</small>
            </strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.bottom-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.9;
  z-index: 99999;
  background-color: #000 !important;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.4);
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
div {
  background: #fc0;
}

.content {
  width: calc(100% - 300px);
  padding-top: 40px;
  padding-left: 40px;
  border-left: 1px solid #e9e9e9;
}
</style>
