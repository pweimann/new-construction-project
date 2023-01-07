import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export default defineNuxtPlugin(nuxtApp => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
})
