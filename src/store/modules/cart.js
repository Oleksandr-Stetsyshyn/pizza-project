export default {
    namespaced: true,

    state: {
      cart: [
        { id: 'milano',
        name: "Міланська",
        price: 124,
        amount: 600,
        ingredients: ['creamSauce', 'mozarella', 'salami', 'bacon', 'oregano']}
  ]},
  
    getters: {
      getProductsCountInCart:state => state.cart.length,
      
      getCustomerOrder(state){
        return state.cart
      }
    },
  
    mutations: {
      pushIdToCart(state, productId){
        state.cart.push(productId) 
      }
    },
  
    actions: {
      addProductToCart({ commit}, productId){
         commit('pushIdToCart', productId)
    },
  }
  
}