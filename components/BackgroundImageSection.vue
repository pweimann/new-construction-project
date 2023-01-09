<template>
  <section ref='main'>
    <div class='parallax-effect'></div>
  </section>
</template>

<script setup lang='ts'>
import { onMounted, onUnmounted, ref, defineProps } from 'vue'
import gsap from 'gsap'

const main = ref()
const ctx = ref()

onMounted(() => {
  ctx.value = gsap.context((self) => {
    if (!self.selector) {
      console.warn(`gsap selector is undefined -> couldn't create the parallax effect`)
      return
    }
    const imgContainer = self.selector('.parallax-effect')
    gsap.to(imgContainer, {
      backgroundPosition: '50% 100%',
      scrollTrigger: {
        trigger: imgContainer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
  }, main.value)
})

onUnmounted(() => {
  ctx.value.revert()
})
</script>
<style lang='css' scoped>
section {
  position: relative;
}

@media (min-width: 320px) {
  section {
    min-height: 30vh;
  }
}

@media (min-width: 640px) {
  section {
    min-height: 70vh;
  }
}

.parallax-effect {
  position: absolute;
  background-image: url("@/public/placeholder.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
}
</style>
