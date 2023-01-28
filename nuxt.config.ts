// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss'
  ],
  build: {
    transpile: ['gsap'],
  },
  googleFonts: {
    families: {
      Quicksand: true,
    }
  },
  imports: {
    autoImport: false
  }
})
