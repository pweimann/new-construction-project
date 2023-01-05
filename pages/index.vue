<template>
  <ImageCollage></ImageCollage>
  <BackgroundImageSection>
    <img src='/placeholder.jpg'>
  </BackgroundImageSection>
  <TabSection></TabSection>
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
