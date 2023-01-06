import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
})
