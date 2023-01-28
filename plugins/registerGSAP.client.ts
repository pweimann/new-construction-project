import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
})
