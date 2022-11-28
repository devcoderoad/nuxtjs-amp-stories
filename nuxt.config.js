const env = process.env.APP_ENV
console.log(env);
export default {
  env: {
    APP_ENV: {
      local: {
        BASE_URL: 'http://localhost:3000',
        HASH_KEY: '123450',
      },
      dev: {
        BASE_URL: 'http://localhost:3001',
        HASH_KEY: '123451',
      },
      prod: {
        BASE_URL: 'http://localhost:3002',
        HASH_KEY: '123452',
      },
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs-amp-stories',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/amp-module
    '@nuxtjs/amp',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  /* AMP module */
  amp: {
    origin: 'http://localhost:3000',
    mode: false,
    /* validator: false */ /* Produces a bug, nuxt will crashes if this is set to true */
    validator: false,
    removeInlineStyles: false,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    nestedProperties: ['author.name'],
    // Only search in title
    fullTextSearchFields: ['title'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
