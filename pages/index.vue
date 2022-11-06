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
    return { products: [] }
  },
  async fetch() {
    const result = await fetch('https://fakestoreapi.com/products')
    const response = await result.json()
    this.products = response
  },
  // head() {
  //   console.log(this.products)
  // },
}
</script>
