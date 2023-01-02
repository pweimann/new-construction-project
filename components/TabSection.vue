<template>
  <section class='bg-light-rosa py-12'>
    <div class='container mx-auto px-4 text-center mb-12'>
      <h2 class='text-dark-rosa text-2xl md:text-5xl font-bold uppercase leading-tight mb-4'>construction berlin
        kreuzberg</h2>
    </div>
    <div class='tabs-wrapper full-width'>
      <div class='tabs-nav w-1/3'>
        <ul>
          <li v-for="navItem in tabsNavList">{{navItem.title}}</li>
        </ul>
      </div>
      <div class='tabs-content w-2/3'>
        <img src='/placeholder.jpg'>
      </div>
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
.tabs-wrapper {
  display: flex;
  flex-direction: row;
}
</style>
