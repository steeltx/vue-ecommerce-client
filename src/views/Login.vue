<template>
  <BasicLayout>
    <div class="login">
      <h2>Iniciar sesión</h2>
      <form class="ui form">
        <div class="field">
          <input type="text" placeholder="Nombre de usuario" />
        </div>
        <div class="field">
          <input type="password" placeholder="Contraseña" />
        </div>
        <button type="submit" class="ui button fluid primary">Ingresar</button>
      </form>
      <router-link to="/register"> Crear una cuenta </router-link>
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout.vue";
export default {
  name: "Login",
  components: {
    BasicLayout,
  },
};
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  > h2 {
    margin: 50px 0 30px 0;
  }

  .ui.form {
    max-width: 300px !important;
    margin: 0 auto;
    margin-bottom: 10px;
    input.error {
      border-color: #faa;
      background-color: #ffeded;
    }
  }
}
</style>