<!-- Please remove this file from your project -->
<template>
  <amp-story
    standalone
    publisher="https://dykraf.com"
    :title="''"
    :publisher-logo-src="''"
    :poster-portrait-src="''"
  >
    <amp-story-page
      v-for="item in items.products"
      :key="item.id + item.price"
      auto-advance-after="6s"
    >
      <amp-story-grid-layer template="vertical">
        <div>
          <h2 class="text-lg font-semibold leading-5">
            {{ item.title }}
          </h2>
          <p class="mt-1 mb-2 text-gray-200 text-xs">
            {{ item.description }}
          </p>
          <a
            href="https://nuxtjs.org"
            target="_blank"
            class="button--doc text-green-500 hover:text-green-600 border-green-300 uppercase rounded-xl border text-xs px-2 py-1"
            >{{ item.category }}</a
          >
          <span class="ml-4">$ {{ item.price }}</span>
          <span class="ml-4">% {{ item.discountPercentage }}</span>
          <div class="my-4 max-w-md">
            <amp-img
              width="1.33"
              height="1"
              layout="responsive"
              :src="item.thumbnail"
              :alt="item.title"
              class="mx-auto text-center"
            />
          </div>
          <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
            <slot v-if="item.stock && item.rating">
              Stock: {{ item.stock }} Rating: {{ item.rating }} Brand:
              <a
                href="https://nuxtjs.org"
                target="_blank"
                class="button--doc text-blue-500 hover:text-blue-600 border-blue-300 uppercase rounded-xl border text-xs px-2 py-1"
                >{{ item.brand }}</a
              >
            </slot>
          </p>
        </div>
      </amp-story-grid-layer>
    </amp-story-page>
  </amp-story>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  props: {
    items: {
      // type: Array,
      // default: () => [],
      type: Object,
      default: () => {},
    },
  },
}
</script>
