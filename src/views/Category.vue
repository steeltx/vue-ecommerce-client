<template>
  <BasicLayout>
    <h1>Estamos en la categoria</h1>
  </BasicLayout>
</template>

<script>
import { onMounted } from "vue";
import BasicLayout from "../layouts/BasicLayout.vue";
import { getProductsCategory } from "../api/product";

export default {
  name: "Category",
  components: {
    BasicLayout,
  },
  watch: {
    $route(to, from) {
      console.log(to);
    },
  },
  setup() {
    onMounted(async () => {
      const response = await getProductsCategory("cereales");
      console.log(response);
    });
  },
};
</script>

<style>
</style>