<template>
  <Tutorial v-if="!$isAMP" :items="products" />
  <TutorialAmp v-else :items="products" />
</template>

<script>
export default {
  name: 'IndexPage',
  amp: 'hybrid',
  ampLayout: 'defaultAmp',
  data() {  
    // console.log(process.env.APP_ENV);
    return { products: [] }
  },
  async fetch() {
    const result = await fetch('https://dummyjson.com/products')
    // const result = await fetch('https://dummyjson.com/products/category/smartphones')
    // const result = await fetch('https://dummyjson.com/products/category/furniture')
    // const result = await fetch('https://dummyjson.com/products/category/laptops')
    const response = await result.json()
    this.products = response
  },
  // head() {
  //   console.log(this.products)
  // },
}
</script>
