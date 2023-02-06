<template>
  <section class='py-10 md:py-16' :class='invert ? "bg-dark-rosa" : "bg-light-rosa"'>
    <FadeInTransition>
      <div class='container mx-auto px-4 text-center mb-6 md:mb-12'>
        <h2 v-if='title' class='text-2xl md:text-5xl font-bold uppercase leading-tight'
            :class='invert ? "text-white" : "text-dark-rosa"'>{{title}}</h2>
      </div>
      <div class='tabs-wrapper full-width' :class='reverse ? "reverse" : ""'>
        <div class='tabs-nav full-width md:w-1/3'>
          <ul>
            <li v-for='navItem in tabsNavList' @click='clickTabNavItem(navItem)'
                class='tabs-nav-item my-2'
                :class='invert ? "text-white" : "text-dark-rosa",
                  isActiveItem(navItem) ? "tab-nav-item--active" : "",
                  reverse ? "mr-8 ml-4": "ml-8 mr-4"'>
              <div class='text-lg md:text-2xl font-bold flex align-middle'>
                <span v-show='isActiveItem(navItem)' class='inline-block mr-2'>-</span>
                <span v-show='!isActiveItem(navItem)' class='inline-block mr-2'>+</span>
                <div class='tabs-nav-item-title inline-block'>{{ navItem.title }}</div>
              </div>
              <p class='text-1xl text-justify leading-normal mb-4'
                 v-show='checkVisibilitOfParagraph(navItem)'
                 :class='invert ? "text-white" : "text-dark-rosa"'>
                {{ navItem.description }}</p>
            </li>
          </ul>
        </div>
        <div class='tabs-content full-width md:w-2/3'>
          <img :src='activeNavItem.imageSrc'>
        </div>
        <div class='container px-4 text-center md:hidden'>
          <p class='text-1xl leading-normal mb-4'
             :class='invert ? "text-white" : "text-dark-rosa"'>
            {{ activeNavItem.description }}</p>
        </div>
      </div>
    </FadeInTransition>
  </section>
</template>

<script setup lang='ts'>
import { ref, Ref, defineProps, computed } from 'vue'
import { TabNavItem } from '~/types/tab-nav-item'

const props = defineProps<{
  tabsNavList: TabNavItem[]
  title?: string
  reverse?: boolean
  invert?: boolean
}>()
const activeNavItem: Ref<TabNavItem | null> = ref(props.tabsNavList[0])

const clickTabNavItem = (item: TabNavItem) => {
  activeNavItem.value = item
}

const isActiveItem = (item: TabNavItem) => {
  return item === activeNavItem.value
}

const checkVisibilitOfParagraph = (item: TabNavItem) => {
  if (process.client) {
    return document.body.clientWidth >= 640 && item === activeNavItem.value
  }
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

@media (min-width: 640px) {
  .tabs-wrapper {
    display: flex;
    flex-direction: row;
  }

  /*noinspection CssUnusedSymbol*/
  .reverse {
    flex-direction: row-reverse;
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

.tabs-nav-item div {
  display: flex;
  align-items: center;
}

.tabs-nav-item-title {
  text-transform: uppercase;
  font-weight: bolder;
}

.tabs-nav-item:hover .tabs-nav-item-title {
  text-decoration: underline;
}

/*noinspection CssUnusedSymbol*/
.tab-nav-item--active .tabs-nav-item-title {
  text-decoration: underline;
}

.tabs-content {
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
}

.tabs-content img {
  object-fit: scale-down;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}
</style>
