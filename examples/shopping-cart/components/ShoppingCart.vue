<template>
  <div class="cart">
    <h2>Your Cart</h2>
     <p style="color:purple">您的手机号码为{{ user.phone }}</p>
    <button class="btn-edit" @click="editPhone" :disabled="!editable">更新手机号</button>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total | currency }}</p>
    <p><button class="btn-edit" :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus,
      user: state => state.users.user,
      editable: state => state.users.editable
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    },
   editPhone () {
     this.$store.dispatch('users/editPhone')
  }
  }
}
</script>
<style scoped>
    .btn-edit[disabled]{
        cursor: not-allowed;
    }
</style>