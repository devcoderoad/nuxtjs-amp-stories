<template>
  <div v-if="item">
    <div class="my-12 bg-white overflow-hidden shadow sm:rounded-lg p-6">
      <a href="/blog" class="float-right text-2xl">&raquo;</a>
      <h2 class="text-2xl leading-7 font-semibold">
        {{ item.title }}
      </h2>
      <p class="my-3 text-gray-400 text-sm">
        {{ item.description }}
      </p>
      <div class="block my-4">
        <img
          :src="item.thumbnail"
          class="mx-auto text-center w-full hover:h-full"
          :alt="item.title"
        />
      </div>
      <!-- content from markdown -->
      <nuxt-content :document="item" />
      <span
        class="button--doc text-green-500 hover:text-green-600 border-green-300 uppercase rounded-xl border text-xs px-2 py-1"
        >{{ new Date(item.createdAt) }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { item: article }
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
