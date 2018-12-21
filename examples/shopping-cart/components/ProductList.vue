<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      商品名称： {{ product.title }} - 价格：{{ product.price | currency }} - 数量：{{product.inventory}}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
