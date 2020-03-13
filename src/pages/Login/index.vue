<template>
 <section class="tile is-vertical is-8 container is-widescreen">
    <b-field label="Ім'я">
      <b-input v-model="name"></b-input>
    </b-field>

    <b-field label="Email" type="is-danger" message="Перевірте email">
      <b-input type="email" value="kovbasyl@" maxlength="30"></b-input>
    </b-field>

    <b-field label="Телефон" type="is-success" message="This username is available">
      <b-input value="+380" maxlength="30"></b-input>
    </b-field>

    <b-field label="Пароль">
      <b-input type="password" value="iwantmyt"  placeholder="Введіть пароль"></b-input>
    </b-field>

    <b-field>
      <b-input type="password" placeholder="Повторіть пароль" password-reveal></b-input>
    </b-field>




    <b-field label="Адреса">
      <b-input maxlength="60" type="textarea"></b-input>
    </b-field>
  </section>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                name: 'Василь Ковбасиль'
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>