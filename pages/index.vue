<template>
  <section>
    <div class='hero-placeholder'>
      <h1>Hello stranger, scroll down</h1>
    </div>
  </section>
  <FadeInTransition>
    <div class='container mx-auto px-4'>
      <div class='w-3/4  mx-auto text-center'>
        <h2 class='text-dark-rosa text-2xl md:text-5xl font-bold uppercase leading-tight mb-6'>Vertical Abode</h2>
        <p class='text-dark-rosa text-1xl md:text-3xl leading-normal mb-4'>Unsere Vision für das
          Neubauprojekt in Berlin-Kreuzberg ist es, ein
          innovatives und integriertes Lebenskonzept zu schaffen, das Wohnen, Arbeiten, Sport und kreative Freiräume
          miteinander verbindet. Wir möchten eine inspiriernde und produktive Atmosphäre für die Besucher und Bewohner
          bereitstellen, in welcher sie sich gerne aufhalten.</p>
      </div>
      <!-- TODO Teaser Renderings   -->
    </div>
  </FadeInTransition>
  <MarqueeLabel class='my-16' />
  <ImageCarousel />
  <TabSection :tabs-nav-list='tabsNavList' title='Nutzung' />
  <ImageSlider />
  <ImageCollage></ImageCollage>
  <BackgroundImageSection />
  <TabSection :tabs-nav-list='saveOurPlanetList' title='Materialkreislauf' reverse invert />
</template>
<script lang='ts' setup>
import MarqueeLabel from '~/components/MarqueeLabel.vue'
import { ref, Ref } from 'vue'
import { TabNavItem } from '~/types/tab-nav-item'
import ImageSlider from '~/components/ImageSlider.vue'

const tabsNavList: Ref<TabNavItem[]> = ref([
  {
    title: 'Freizeit',
    imageSrc: '/tabs/Freizeit_Sport_neu.png',
    description: 'Wohnen: Da der Trend des Wohnens hin zu unterschiedlichsten Wohnkonzepten wie auch dem Anstieg der Remote-Arbeiten deutet, wurden durch flexible Wohnungsgrößen von 20m2 bis 120m2 in den Kategorien XS - S - M - L - XL sowie der Grundrissvariabilität innerhalb der jeweiligen Wohnungen selbst (Anpassung einer Raumstruktur an die Bedürfnisse der Bewohnenden) die Adaption des Wohnraums an den jeweiligen Nutzer und Lebensabschnitt sichergestellt.\n'
  },
  {
    title: 'Arbeiten',
    imageSrc: '/tabs/Arbeiten_neu.png',
    description: 'Das Arbeiten von Morgen wird sowohl von dem Anstieg verschiedenster Technologien wie beispielsweise KI und Automatisierung als auch von Remote-Arbeit und flexiblen Arbeitszeitmodellen geprägt sein. Erhöhte Aufmerksamkeit gilt der Nachhaltigkeit sowie der sozialen Verantwortung von Unternehmen, um ein Beitrag zur Verbesserung der Arbeitsbedingungen für Mitarbeiter und Verringerung der Umweltbelastung zu erzielen.'
  },
  {
    title: 'Wohnen',
    imageSrc: '/tabs/Wohnen_neu.png',
    description: 'Lorem'
  },
  {
    title: 'Grüne Lunge',
    imageSrc: '/tabs/Grüne_Lunge_neu.png',
    description: 'Lorem'
  },
  {
    title: 'Mobilität',
    imageSrc: '/tabs/Mobilität_neu.png',
    description: 'Lorem'
  }
])

const saveOurPlanetList: Ref<TabNavItem[]> = ref([
  {
    title: 'Save',
    imageSrc: '/tabs/Recycle.png',
    description: 'Wohnen: Da der Trend des Wohnens hin zu unterschiedlichsten Wohnkonzepten wie auch dem Anstieg der Remote-Arbeiten deutet, wurden durch flexible Wohnungsgrößen von 20m2 bis 120m2 in den Kategorien XS - S - M - L - XL sowie der Grundrissvariabilität innerhalb der jeweiligen Wohnungen selbst (Anpassung einer Raumstruktur an die Bedürfnisse der Bewohnenden) die Adaption des Wohnraums an den jeweiligen Nutzer und Lebensabschnitt sichergestellt.\n'
  },
  {
    title: 'Our',
    imageSrc: '/tabs/ReUse.png',
    description: 'Lorem'
  },
  {
    title: 'Planet',
    imageSrc: '/tabs/Reduce_neu.png',
    description: 'Das Arbeiten von Morgen wird sowohl von dem Anstieg verschiedenster Technologien wie beispielsweise KI und Automatisierung als auch von Remote-Arbeit und flexiblen Arbeitszeitmodellen geprägt sein. Erhöhte Aufmerksamkeit gilt der Nachhaltigkeit sowie der sozialen Verantwortung von Unternehmen, um ein Beitrag zur Verbesserung der Arbeitsbedingungen für Mitarbeiter und Verringerung der Umweltbelastung zu erzielen.'
  }
])

const imageCarousel: Ref<{ src: string, alt?: string }[]> = ref([
  {
    src: '/pikto/pikto_1.png',
    alt: ''
  },
  {
    src: '/pikto/pikto_2.png',
    alt: ''
  },
  {
    src: '/pikto/pikto_3.png',
    alt: ''
  },
  {
    src: '/pikto/pikto_4.png',
    alt: ''
  },
  {
    src: '/pikto/pikto_5.png',
    alt: ''
  }
])
</script>
<style lang='css'>
.hero-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
