<template>
  <div class="fixed inset-0 bg-black flex items-center justify-center z-50">
    <div v-if="!loadingComplete" class="text-white text-6xl font-bold">
      {{ Math.floor(loadingProgress) }}%
    </div>
    <button
        v-else
        @click="$emit('enter')"
        class="enter-button text-white text-2xl bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
    >
      Enter The Space
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const loadingProgress = ref(0)
const loadingComplete = ref(false)

onMounted(() => {
  gsap.to(loadingProgress, {
    value: 100,
    duration: 2.5,
    ease: 'linear',
    onUpdate: () => {
      loadingProgress.value = Math.floor(loadingProgress.value)
    },
    onComplete: () => {
      gsap.to('.text-6xl', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          loadingComplete.value = true
          gsap.from('.enter-button', {
            opacity: 0,
            scale: 0.5,
            duration: 0.5
          })
        }
      })
    }
  })
})
</script>

<style scoped>
.enter-button {
  position: relative;
  overflow: hidden;
  animation: button-glow 3s ease-in-out infinite;
}

.enter-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
  animation: shimmer 6s linear infinite;
}

@keyframes button-glow {
  0%, 100% {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
  }
}
</style>
