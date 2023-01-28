<template>
  <section class='bg-light-rosa py-12'>
    <FadeInTransition>
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
                <img :src='isActiveItem(navItem) ? "minus-icon.svg": "plus-icon.svg"'
                     class='tabs-nav-item-before inline-block mr-2' />
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
    </FadeInTransition>
  </section>
</template>

<script setup lang='ts'>
import { ref, Ref } from 'vue'
import { TabNavItem } from '~/types/TabNavItem'

const tabsNavList: Ref<TabNavItem[]> = ref([
  {
    title: 'Save',
    imageSrc: '/tabs/pikto_ug.png',
    description: 'Das Arbeiten von Morgen wird sowohl von dem Anstieg verschiedenster Technologien wie beispielsweise KI und Automatisierung als auch von Remote-Arbeit und flexiblen Arbeitszeitmodellen geprägt sein. Erhöhte Aufmerksamkeit gilt der Nachhaltigkeit sowie der sozialen Verantwortung von Unternehmen, um ein Beitrag zur Verbesserung der Arbeitsbedingungen für Mitarbeiter und Verringerung der Umweltbelastung zu erzielen. \n' +
      'Die flexible Grundrissgestaltung ermöglicht die Adaption der Arbeitsräume an die Bedürfnisse der Nutzer. Umsetzbar ist zum Einen die Möglichkeit einer klassischen Bürolösung mit moderner Zonierung von Empfang-, Kommonikations-, Team-, Einzel-, sowie Fokosbereichen. Hier ist ebenfalls die Möglichkeit der Anmietbarkeit einzelner Arbeitsplätze, ganzer Bereiche wie auch gesamter Flächen denkbar. Zum Anderen ermöglicht die Freiheit in der Raumgestaltung auch Alternative Arbeitsflächen wie beispielsweise einzelne Ateliers oder Werkstatt- und Laborplätze.'
  },
  {
    title: 'Our',
    imageSrc: '/tabs/pikto_eg.png',
    description: 'Wohnen: Da der Trend des Wohnens hin zu unterschiedlichsten Wohnkonzepten wie auch dem Anstieg der Remote-Arbeiten deutet, wurden durch flexible Wohnungsgrößen von 20m2 bis 120m2 in den Kategorien XS - S - M - L - XL sowie der Grundrissvariabilität innerhalb der jeweiligen Wohnungen selbst (Anpassung einer Raumstruktur an die Bedürfnisse der Bewohnenden) die Adaption des Wohnraums an den jeweiligen Nutzer und Lebensabschnitt sichergestellt. Gleichzeitig ermöglichen Loggien, Balkone und Austragung eine Erhöhung der Qualität des Wohnraums und ein Wechselspiel zwischen Innen- und Außenraum. Durch bodentiefe Fenster ist eine gute Belichtung und natürliche Belüftung garantiert.\n'
  },
  {
    title: 'Planet',
    imageSrc: '/tabs/pikto_dg.png',
    description: 'Lorem'
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

@media (min-width: 640px) {
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

.tabs-nav-item div {
  display: flex;
  align-items: center;
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
.tab-nav-item--active .tabs-nav-item-title {
  text-decoration: none;
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
