<template>
  <BasicLayout>
    <div class="register">
      <h2>Registro de usuario</h2>
      <form class="ui form" @submit.prevent="register">
        <div class="field">
          <input
            type="text"
            placeholder="Nombre de usuario"
            v-model="formData.username"
            :class="{ error: formError.username }"
          />
        </div>
        <div class="field">
          <input
            type="text"
            placeholder="Correo"
            v-model="formData.email"
            :class="{ error: formError.email }"
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="Contraseña"
            v-model="formData.password"
            :class="{ error: formError.password }"
          />
        </div>
        <button type="submit" class="ui button fluid primary">
          Crear usuario
        </button>
      </form>
      <router-link to="/login"> Iniciar sesión </router-link>
    </div>
  </BasicLayout>
</template>

<script>
import { ref } from "vue";
import BasicLayout from "../layouts/BasicLayout.vue";
import * as Yup from "yup";

export default {
  name: "Register",
  components: {
    BasicLayout,
  },
  setup() {
    let formData = ref({});
    let formError = ref({});

    const schemaForm = Yup.object().shape({
      username: Yup.string().required(true),
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    });

    const register = async () => {
      formError.value = {};

      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        console.log("Todo ok");
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
    };

    return {
      register,
      formData,
      formError,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
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