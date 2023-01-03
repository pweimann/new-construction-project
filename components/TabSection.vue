<template>
  <section class='bg-light-rosa py-12'>
    <div class='container mx-auto px-4 text-center mb-12'>
      <h2 class='text-dark-rosa text-2xl md:text-5xl font-bold uppercase leading-tight mb-4'>construction berlin
        kreuzberg</h2>
    </div>
    <div class='tabs-wrapper full-width'>
      <div class='tabs-nav full-width md:w-1/3'>
        <ul>
          <li v-for='navItem in tabsNavList' @click='clickTabNavItem(navItem)'
              :class='isActiveItem(navItem) ? "tab-nav-item--active" : ""'
              class='tabs-nav-item text-dark-rosa my-2 ml-8 mr-4'>
            <div class='text-2xl font-bold'>
              <img :src='isActiveItem(navItem) ? "plus-icon.svg": "minus-icon.svg"' class='tabs-nav-item-before inline-block mr-2'/>
              <div class='tabs-nav-item-title inline-block'>{{ navItem.title }}</div>
            </div>
            <p class='text-dark-rosa text-1xl leading-normal mb-4' v-show='isActiveItem(navItem)'>
              {{ navItem.description }}</p>
          </li>
        </ul>
      </div>
      <div class='tabs-content full-width md:w-2/3'>
        <img :src='activeNavItem.imageSrc'>
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
    imageSrc: '/second-placeholder.png',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
  },
  {
    title: 'Our',
    imageSrc: '/placeholder.jpg',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
  },
  {
    title: 'Planet',
    imageSrc: '/second-placeholder.png',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
  }
])

const activeNavItem: Ref<TabNavItem | null> = ref(tabsNavList.value[0])

const clickTabNavItem = (item: TabNavItem) => {
  activeNavItem.value = item
}

const isActiveItem = (item: TabNavItem) => {
  return item === activeNavItem.value
}
</script>
<style lang='css' scoped>
@media (min-width: 320px) {
  .tabs-wrapper {
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 768px) {
  .tabs-wrapper {
    display: flex;
    flex-direction: row;
  }
}

.tabs-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.tabs-nav-item {
  cursor: pointer;
  transition: all 2s ease-in-out;
}

.tabs-nav-item-title {
  text-decoration: underline;
}

.tabs-nav-item-before {
  width: 20px;
  height: 20px;
}

.tabs-nav-item:hover .tabs-nav-item-title {
  text-decoration: none;
}

/*noinspection CssUnusedSymbol*/
.tab-nav-item--active {
  text-decoration: none;
}

.tabs-content {
  position: relative;
  display: block;
  overflow: hidden;
}

.tabs-content img {
  object-fit: scale-down;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}
</style>
