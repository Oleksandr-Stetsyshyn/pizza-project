import Vue from 'vue'
import Vuex from 'vuex'
// import { v4 as uuidv4 } from 'uuid';
import cart from './modules/cart'
import pizzaRecipe from './modules/pizzaRecipe'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
     
    },
    mutations: {},
    actions: {},
    getters: {},
    modules: {cart,
        pizzaRecipe}
})

export default store;