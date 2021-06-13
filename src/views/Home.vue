<template>
  <BasicLayout>
    <h2>Estamos en home</h2>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import BasicLayout from "../layouts/BasicLayout.vue";
import { getProducts } from "../api/product";

export default {
  name: "Home",
  components: {
    BasicLayout,
  },
  setup() {
    let producs = ref(null);

    onMounted(async () => {
      const response = await getProducts(20);
      producs.value = response;
    });
    return {
      producs,
    };
  },
};
</script>
