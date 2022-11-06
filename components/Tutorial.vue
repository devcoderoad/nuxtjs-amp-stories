<!-- Please remove this file from your project -->
<template>
  <div v-if="items && items.length">
    <div
      v-for="item in items"
      :key="item.id + item.price"
      class="my-12 bg-white overflow-hidden shadow sm:rounded-lg p-6"
    >
      <h2 class="text-2xl leading-7 font-semibold">
        {{ item.title }}
      </h2>
      <p class="my-3 text-gray-400 text-sm">
        {{ item.description }}
      </p>
      <a
        href="https://nuxtjs.org"
        target="_blank"
        class="button--doc text-green-500 hover:text-green-600 border-green-300 uppercase rounded-xl border text-xs px-2 py-1"
        >{{ item.category }}</a
      >
      <span class="ml-4">$ {{ item.price }}</span>
      <div class="block my-4">
        <img :src="item.image" class="mx-auto text-center" :alt="item.title" />
      </div>
      <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
        <slot v-if="item.rating">
          Rate: {{ item.rating.rate }} Count: {{ item.rating.count }}
        </slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
