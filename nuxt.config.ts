export default defineNuxtConfig({
  app: {
    head: {
      title: 'demo',
      link: [{
        rel: 'icon',
        href: '/favicon.ico',
      }],
      meta: [{
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1',
      }, {
        name: 'google',
        content: 'notranslate',
      }],
    },
  },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  unocss: {
    preflight: true,
  },
  experimental: {
    inlineSSRStyles: false,
  },
})
