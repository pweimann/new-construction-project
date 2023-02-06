<template>
  <div class='marquee-wrapper' v-bind='$attrs'>
    <span v-html='label'></span>
    <span v-html='label'></span>
    <span v-html='label'></span>
    <span v-html='label'></span>
    <span v-html='label'></span>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, defineProps } from 'vue'
import gsap from 'gsap'

const props = defineProps({
  label: {
    required: true,
    type: String
  }
})

onMounted(() => {
  const duration = document.body.clientWidth > 640 ? 16 : 20

  gsap.set('.marquee-wrapper span', {
    translateX: '100%'
  })

  gsap.to('.marquee-wrapper span', {
    duration: duration,
    ease: 'none',
    translateX: '-100%',
    modifiers: {
      translateX: gsap.utils.unitize(x => {
        if (x === -100) {
          x = 100
        }
        return x
      })
    },
    repeat: -1
  })
})
</script>

<style scoped>
.marquee-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 1.5rem;
  white-space: nowrap;
  text-transform: uppercase;
}

</style>
