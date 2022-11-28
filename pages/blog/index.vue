<template>
  <div v-if="items && items.length">
    <div
      v-for="item in items"
      :key="item.slug + item.createdAt"
      class="my-12 bg-white overflow-hidden shadow sm:rounded-lg p-6"
    >
      <a :href="`${item.path}`">
        <h2 class="text-2xl leading-7 font-semibold">
          {{ item.title }}
        </h2>
        <p class="my-3 text-gray-400 text-sm">
          {{ item.description }}
        </p>
        <!-- <a
        :href="`/blog/${item.slug}`"
        target="_blank"
        class="button--doc text-green-500 hover:text-green-600 border-green-300 uppercase rounded-xl border text-xs px-2 py-1"
        >{{ item.category }}</a
      > -->
        <!-- <span class="ml-4">$ {{ item.price }}</span> <span class="ml-4">% {{ item.discountPercentage }}</span> -->
        <span
          class="button--doc text-green-500 hover:text-green-600 border-green-300 uppercase rounded-xl border text-xs px-2 py-1"
          >{{ new Date(item.createdAt) }}</span
        >
        <div class="block my-4">
          <img
            :src="item.thumbnail"
            class="mx-auto text-center w-full hover:h-full"
            :alt="item.title"
          />
        </div>
        <!-- <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
        <slot v-if="item.stock && item.rating">
          Stock:
          {{ item.stock }} Rating: {{ item.rating }}
          Brand:
          <a
            href="https://nuxtjs.org"
            target="_blank"
            class="button--doc text-blue-500 hover:text-blue-600 border-blue-300 uppercase rounded-xl border text-xs px-2 py-1"
            >{{ item.brand }}</a
          >
        </slot>
      </p> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ $content }) {
    const articles = await $content('blog').where({ publish: true }).fetch()
    return { items: articles }
  },
  head() {
    return {
      title: 'How to make AMP Web Stories from your Nuxt.js Website',
      description:
        'Another way to represent your Website content into Web Stories from your Nuxt.js Website with AMP Web Story',
    }
  },
}
</script>
