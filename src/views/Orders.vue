<template>
  <BasicLayout>
    <h1>Mis pedidos</h1>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import jwtDecode from "jwt-decode";
import BasicLayout from "../layouts/BasicLayout.vue";
import { getOrder } from "../api/order";
import { getTokenApi } from "../api/token";

export default {
  name: "Order",
  components: {
    BasicLayout,
  },
  setup() {
    let orders = ref(null);
    onMounted(async () => {
      const token = getTokenApi();
      const { id } = jwtDecode(token);
      const response = await getOrder(id);

      orders.value = response;
    });

    return {
      orders,
    };
  },
};
</script>

<style>
</style>