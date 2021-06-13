<template>
  <BasicLayout>
    <h1>Registro</h1>
    <router-link to="/login"> Iniciar sesión </router-link>
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout.vue";
export default {
  name: "Register",
  components: {
    BasicLayout,
  },
};
</script>

<style>
</style>