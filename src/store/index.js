import Vue from 'vue'
import Vuex from 'vuex'
// import { v4 as uuidv4 } from 'uuid';
import cart from './modules/cart'
import pizzaRecipe from './modules/pizzaRecipe'
import addIngredientToDataBase from './modules/addIngredientToDataBase'
import authorization from './modules/authorization'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        cart,
        pizzaRecipe,
        addIngredientToDataBase,
        authorization
     }
})

export default store;