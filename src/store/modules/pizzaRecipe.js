export default {
    // namespaced: true,

    state: {
        recipesList: [],
        loading: false,
        error: null
    },
    getters: {
        getRecipesList: state => state.recipesList,
        isLoadingRecipe: state => state.loading,
        isErrorRecipe: state => state.error
    },
    mutations: {
        setRecipesList(state, data) {
            state.recipesList = [...data]
        },
        setLoading(state, loadingStatus) {
            state.loading = loadingStatus
        },
        setError(state, error) {
            state.error = error
        }
    },



    actions: {
        loadRecipesList({ commit }) {
            commit('setLoading', true)
            commit('setError', null)

            const db = this.$firebase.firestore();
            db.collection("recipes")
                .get()
                .then(
                    snap => {
                        if (snap.empty)
                            throw new Error('Empty')

                        const recipes = [];
                        snap.forEach(doc => {
                            recipes.push({ id: doc.id, ...doc.data() });
                        }
                        );
                        commit('setRecipesList', recipes);
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

        saveRecipe({ commit, dispatch }, { recipeId, name, price, species, img, ingredientsArr }) {
            commit('setLoading', true)
            commit('setError', null)

            const db = this.$firebase.firestore();
            if (!recipeId) {
                // Add a new document in collection
                db.collection("recipes")
                    .doc()
                    .set({
                        name,
                        price,
                        species,
                        img,
                        ingredientsArr
                    })
                    .then(function () {
                        console.log("Document successfully written!");
                        dispatch('loadRecipesList')
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
                db.collection("recipes")
                    .doc(recipeId)
                    .set({
                        name,
                        price,
                        species,
                        img,
                        ingredientsArr
                    })
                    .then(function () {
                        console.log("Document successfully written!");
                        dispatch('loadRecipesList')
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

        deleteRecipe({ commit, dispatch},{id}) {
            alert(id)
            // Delete a document from collection
            const db = this.$firebase.firestore();
            db.collection("recipes")
                .doc(id)
                .delete()
                .then(function () {
                    console.log("Document successfully written!");
                    dispatch('loadRecipesList')
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                    commit('setError', error)
                })
                .finally(() => {
                    commit('setLoading', false)
                });
            this.loadRecipesList();
        }
    }
}
