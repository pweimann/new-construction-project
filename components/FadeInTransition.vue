<template>
  <div ref='main'>
    <div class='fade-in'>
      <slot />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'

const main = ref()
const ctx = ref()

onMounted(() => {
  ctx.value = gsap.context((self) => {
    if (!self.selector) {
      console.warn(`gsap selector is undefined -> couldn't create the fade in animation`)
      return
    }
    const fadeContainer = self.selector('.fade-in')
    gsap.to(fadeContainer, {
      opacity: 1,
      duration: 2.5,
      scrollTrigger: {
        trigger: fadeContainer,
        start: 'top 90%',
        // end: 'top 20%',
        // scrub: true
      }
    })
  }, main.value)
})

onUnmounted(() => {
  ctx.value.revert()
})
</script>
<style lang='css'>
.fade-in {
  opacity: 0;
}
</style>
