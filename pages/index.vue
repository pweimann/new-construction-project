<template>
  <section>
    <div class='hero-placeholder sm:text-1xl'>
      <h1>Hello stranger, scroll down</h1>
    </div>
  </section>
  <FadeInTransition>
    <div class='container mx-auto px-4'>
      <div class='w-3/4 mx-auto text-center'>
        <nuxt-img src='/logo.svg' />
        <!--        <h2 class='text-dark-rosa text-2xl md:text-5xl font-bold uppercase leading-tight mb-6'>Vertical Abode</h2>-->
        <p class='text-dark-rosa text-1xl md:text-3xl leading-normal mb-4'>Unsere Vision für das
          Neubauprojekt in Berlin-Kreuzberg ist es, ein
          innovatives und integriertes Lebenskonzept zu schaffen, das Wohnen, Arbeiten, Sport und kreative Freiräume
          miteinander verbindet. Wir möchten eine inspiriernde und produktive Atmosphäre für die Besucher und Bewohner
          bereitstellen, in welcher sie sich gerne aufhalten.</p>
      </div>
      <!-- TODO Teaser Renderings   -->
    </div>
  </FadeInTransition>
  <MarqueeLabel class='my-16' :label='firstLabel' />
  <ImageCarousel />
  <TabSection :tabs-nav-list='tabsNavList' title='Nutzung' />
  <section>
    <FadeInTransition>
      <nuxt-img src='/3D-Schnitt.jpg' class='w-full mt-10' />
    </FadeInTransition>
  </section>
  <ImageSlider />
  <ImageCollage></ImageCollage>
  <MarqueeLabel class='my-16' :label='secondLabel' />
  <BackgroundImageSection />
  <TabSection :tabs-nav-list='saveOurPlanetList' title='Materialkreislauf' reverse invert />
  <footer class='w-full flex align-center justify-center text-white text-xs bg-dark-rosa sm:py-2'>
    <NuxtLink to='/impressum'>Impressum</NuxtLink>
  </footer>
</template>
<script lang='ts' setup>
import MarqueeLabel from '~/components/MarqueeLabel.vue'
import { ref, Ref } from 'vue'
import { TabNavItem } from '~/types/tab-nav-item'
import ImageSlider from '~/components/ImageSlider.vue'
import Impressum from '~/pages/impressum.vue'

const tabsNavList: Ref<TabNavItem[]> = ref([
  {
    title: 'Freizeit',
    imageSrc: '/tabs/Freizeit_Sport_neu.png',
    description: 'Ein integrierter Freizeitbereich, der sich auf Sport, Fitness und Entspannung konzentriert, ist ebenfalls ein wichtiger Bestandteil des Gebäudes. Zugleich bietet das Gebäude auch Raum für Entspannung und Yoga. Außerdem gibt es kreative Freiräume, in denen Bewohner und Be- sucher ihre Kreativität und ihr handwerkliches Können ausleben können. Diese Räume können für eine Vielzahl von Aktivitäten genutzt werden, von Kunst- bis hin zu DIY-Projekten.'
  },
  {
    title: 'Arbeiten',
    imageSrc: '/tabs/Arbeiten_neu.png',
    description: 'Die Arbeitsflächen sind individuell anpassbar und können für eine Vielzahl von Geschäftsbedürfnissen genutzt werden, von Co-Working-Räumen bis hin zu kleinen Büros und Atelierflächen.'
  },
  {
    title: 'Wohnen',
    imageSrc: '/tabs/Wohnen_neu.png',
    description: 'Jede Wohnung verfügt über eine offene und helle Grundfläche mit hohen Decken, um maximale Bewegungsfreiheit und Licht zu bieten. Zusätzlich bieten Balkone, Loggien und Auskragungen eine Erhöhung der Wohnqualität und ermöglichen eine nahtlose Verbindung vom Innen- und Außenraum.'
  },
  {
    title: 'Grüne Lunge',
    imageSrc: '/tabs/Grüne_Lunge_neu.png',
    description: 'Das lichtdurchflutete Atrium fungiert als grüne Lunge des Gebäudes. Als Zentrum dient es der Begegnung zwischen Besucher und Bewohner und lässt die verschiedenen Nutzungen innerhalb des Gebäudes miteinander verschmelzen. Die Treppe im Erdgeschoss lädt zum verweilen, beobachten und als Treffpunkt ein.'
  },
  {
    title: 'Mobilität',
    imageSrc: '/tabs/Mobilität_neu.png',
    description: 'Durch eine Tiefgarage mit abgetrennten Car-Sharing Plätzen und integrierten E-Ladesäulen wird ein großer Beitrag zur Mobilitätswende geleistet. Der im Erdgeschoss verortete, abschließbare Fahrradraum mit Umkleiden und Duschen unterstützt die Wahl des Verkehrsmittels hin zum Fahrrad oder E-Bike und ermöglicht sichere und trockene Parkflächen hierfür. '
  }
])

const saveOurPlanetList: Ref<TabNavItem[]> = ref([
  {
    title: 'Save',
    imageSrc: '/tabs/Recycle.png',
    description: ''
  },
  {
    title: 'Our',
    imageSrc: '/tabs/ReUse.png',
    description: ''
  },
  {
    title: 'Planet',
    imageSrc: '/tabs/Reduce_neu.png',
    description: ''
  }
])

const firstLabel = 'save our <strong>planet</strong> +++ one earth - one chance +++&nbsp;\n'
const secondLabel = 'reduce your <strong>footprint</strong> +++ increase your impact +++&nbsp;\n'
</script>
<style lang='css'>
.hero-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
