<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Registration</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Email">
        <b-input type="email" v-model="email" placeholder="Your email" required></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password"  v-model="password"
          password-reveal
          placeholder="Your password"
          required
        ></b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">Close</button>
      <button class="button is-primary" @click="registerWithFirebase()">Registration</button>
    </footer>
  </div>
</template>

<script>


export default {
  name: "Register",

  data() {
    return {
    email: null,
    password: null
    };
  },

  methods: {
   registerWithFirebase () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signUpAction', user)
    }
  }
};
</script>