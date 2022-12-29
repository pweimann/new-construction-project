// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts', 'nuxt-svgo'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      Geramond: true,
      Futura: true
    }
  }
})
