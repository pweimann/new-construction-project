<template>
  <ImageCollage></ImageCollage>
  <BackgroundImageSection>
    <img src='/placeholder.jpg'>
  </BackgroundImageSection>
  <section class='bg-dark-rosa py-8'>
    <div class='container mx-auto px-4'>
      <h2 class='text-white text-2xl font-bold leading-tight mb-4'>Section 2</h2>
      <p class='text-white text-lg leading-normal mb-4'>This is the second section with a pink
        background.</p>
    </div>
  </section>
</template>
<script lang='ts'>

import { defineComponent } from 'vue'
import BackgroundImageSection from '~/components/BackgroundImageSection.vue'

export default defineComponent({
  components: { BackgroundImageSection }
})
</script>
<style lang='css'>

</style>
