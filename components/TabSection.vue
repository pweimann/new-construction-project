<template>
  <section class='bg-light-rosa py-12'>
    <div class='container mx-auto px-4 text-center mb-12'>
      <h2 class='text-dark-rosa text-2xl md:text-5xl font-bold uppercase leading-tight mb-4'>construction berlin
        kreuzberg</h2>
    </div>
    <div class='tabs-wrapper full-width'>
      <div class='tabs-nav w-1/3'>
        <ul>
          <li v-for='navItem in tabsNavList' @click='clickTabNavItem(navItem)' :class='activeTabNavItemStyles(navItem)'
              class='tabs-nav-item text-3xl text-dark-rosa my-2 ml-8'><span
            class='mr-2'>+</span>{{ navItem.title }}
          </li>
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

const activeNavItem: Ref<TabNavItem | null> = ref(tabsNavList.value[0])

const clickTabNavItem = (item: TabNavItem) => {
  activeNavItem.value = item
}

const activeTabNavItemStyles = (item: TabNavItem) => {
  return item === activeNavItem.value ? 'tab-nav-item--active' : ''
}
</script>
<style lang='css' scoped>
.tabs-wrapper {
  display: flex;
  flex-direction: row;
}

.tabs-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.tabs-nav-item {
  cursor: pointer;
  text-decoration: underline;
  transition: all 2s ease-in-out;
}

.tabs-nav-item:hover {
  text-decoration: none;
}

/*noinspection CssUnusedSymbol*/
.tab-nav-item--active {
  text-decoration: none;
}
</style>
