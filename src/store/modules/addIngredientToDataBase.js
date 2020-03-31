export default {
    // namespaced: true,

    state: {
        ingredientsList: [],
        loading: false,
        error: null
    },
    getters: {
        getIngredientsList: state => state.ingredientsList,
        isLoading: state => state.loading,
        isError: state => state.error
    },
    mutations: {
        setIngredientsList(state, data) {
            state.ingredientsList = [...data]
        },
        setLoading(state, loadingStatus) {
            state.loading = loadingStatus
        },
        setError(state, error) {
            state.error = error
        }
    },



    actions: {
        loadIngredientsList({ commit }) {
            commit('setLoading', true)
            commit('setError', null)

            const db = this.$firebase.firestore();
            db.collection("ingredients")
                .get()
                .then(
                    snap => {
                        if (snap.empty)
                            throw new Error('Empty')

                        const ingredients = [];
                        snap.forEach(doc => {
                            ingredients.push({ id: doc.id, ...doc.data() });
                        }
                        );
                        commit('setIngredientsList', ingredients);
                    })
                .catch(
                    (err) => {
                        console.log(err)
                        commit('setError', err)
                    }
                )
                .finally(() => {
                    commit('setLoading', false)
                })
        },

        saveIngredient({ commit, dispatch }, { ingredientId, name, price, species, img }) {
            commit('setLoading', true)
            commit('setError', null)

            const db = this.$firebase.firestore();
            if (!ingredientId) {
                // Add a new document in collection
                db.collection("ingredients")
                    .doc()
                    .set({
                        name,
                        price,
                        species,
                        img
                    })
                    .then(function () {
                        console.log("Document successfully written!");
                        dispatch('loadIngredientsList')
                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            } else {
                // Change a document in collection
                db.collection("ingredients")
                    .doc(ingredientId)
                    .set({
                        name,
                        price,
                        species,
                        img
                    })
                    .then(function () {
                        console.log("Document successfully written!");
                        dispatch('loadIngredientsList')
                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            }
        },

        deleteIngredient({ commit, dispatch},{id}) {
            alert(id)
            // Delete a document from collection
            const db = this.$firebase.firestore();
            db.collection("ingredients")
                .doc(id)
                .delete()
                .then(function () {
                    console.log("Document successfully written!");
                    dispatch('loadIngredientsList')
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
            this.loadIngredientsList();
        }
    }
}
