import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      baseUrl: 'https://dretcomunacasa.com',
    }
  },

  css: [
    '~/assets/css/main.css',
  ],

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxt/icon',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  i18n: {
    detectBrowserLanguage: false,
    defaultLocale: 'val',
    locales: [
      {
        code: 'val',
        language: 'ca-ES',
        name: 'Valencià',
        file: 'val.js'
      },
      {
        code: 'cas',
        language: 'es-ES',
        name: 'Castellano',
        file: 'cas.js'
      },
    ],
    baseUrl: 'https://dretcomunacasa.com',
    lazy: true,
    langDir: 'lang',
  },
})