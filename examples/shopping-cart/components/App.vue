<template>
  <div id="app">
    <UserCenter/>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import UserCenter from './UserCenter.vue'
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'

export default {
  components: { UserCenter, ProductList, ShoppingCart }
}
</script>
