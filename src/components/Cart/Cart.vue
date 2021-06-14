<template>
  <div class="cart" :class="{ open: showCart }">
    <h2>Esto es el carrito</h2>
    <button>Cerrar</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Cart",
  setup() {
    const store = useStore();
    const showCart = computed(() => store.state.showCart);

    return {
      showCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px 0px 26px 5px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transform: translateX(150%);

  &.open {
    transform: translateX(0);
  }
}
</style>