<template>
  <section>
    <div class='hero-placeholder'>
      <h1>Hello girls, scroll down</h1>
    </div>
  </section>
  <MarqueeLabel/>
  <ImageCarousel/>
  <ImageCollage></ImageCollage>
  <BackgroundImageSection />
  <TabSection />
</template>
<script lang='ts' setup>
import MarqueeLabel from '~/components/MarqueeLabel.vue'
</script>
<style lang='css'>
.hero-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
