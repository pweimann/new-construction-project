<template>
  <section class='bg-light-rosa py-8'>
    <div class='container mx-auto px-4 text-center'>
      <h2 class='text-dark-rosa text-2xl md:text-5xl font-bold uppercase leading-tight mb-4'>construction berlin
        kreuzberg</h2>
    </div>
    <div class='tabs-wrapper'>
      <div class='tabs-nav'></div>
      <div class='tabs-content'></div>
    </div>
  </section>
</template>

<script setup lang='ts'>
import { Ref } from 'vue'
import { TabNavItem } from '~/types/TabNavItem'

const tabsNavList: Ref<TabNavItem[]> = ref([
  {
    title: 'Save',
    imageSrc: '/placeholder.jpg'
  },
  {
    title: 'Our',
    imageSrc: '/placeholder.jpg'
  },
  {
    title: 'Planet',
    imageSrc: '/placeholder.jpg'
  }
])
</script>
<style lang='css'>

</style>
