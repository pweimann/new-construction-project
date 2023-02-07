<template>
  <section class='bg-white py-10 md:py-16' ref='main'>
    <FadeInTransition>
      <div class='container mx-auto px-4'>
        <div class='w-3/4 mx-auto text-center'>
          <h2 class='text-dark-rosa text-3xl md:text-5xl font-bold uppercase leading-tight mb-4'>VERTICAL ABODE</h2>
          <p class='text-dark-rosa text-2xl md:text-3xl leading-normal mb-4'>ist zeitlos und warm</p>
          <p class='text-dark-rosa text-sm md:text-1xl leading-normal mb-4'>Das vertical Village ist
            modern und konzentriert sich auf den Nutzen des Raumes. Es schafft eine vertikale Gemeinschaft in einem
            dichter besiedelten Bereich in Berlin Kreuzberg. Das zentrale Atrium kreiert eine offene,
            lichtdurchflutete und grüne Insel als Zentrum der Gemeinschaft.</p>
        </div>
      </div>
      <div class='collage-container mt-8 md:mt-16 px-4 w-full'>
        <div class='collage-left-side'>
          <img src='/renderings/Persp1.jpg' alt='Rendering 1'
               class='collage-left-side-item rounded-3xl object-cover collage-left-side-first'>
          <img src='/renderings/Persp2.jpg' alt='Rendering 2'
               class='collage-left-side-item-above sm:w-1/6 rounded-3xl object-cover collage-left-side-second'>
        </div>
        <div class='collage-right-side'>
          <img src='/renderings/Persp3.jpg' alt='Rendering 3'
               class='collage-right-side-item rounded-3xl object-cover'>
          <img src='/renderings/Persp4.jpg' alt='Rendering 4'
               class='collage-right-side-item-above sm:w-1/6 rounded-3xl object-cover'>
        </div>
        <div class='collage-left-side'>
          <img src='/renderings/persp6.jpg' alt='Rendering 5'
               class='collage-left-side-item rounded-3xl object-cover collage-left-side-first'>
          <img src='/renderings/persp7.jpg' alt='Rendering 6'
               class='collage-left-side-item-above sm:w-1/6 rounded-3xl object-cover collage-left-side-second'>
        </div>
      </div>
    </FadeInTransition>

  </section>
</template>

<script setup lang='ts'>
</script>
<style scoped>
@media (min-width: 320px) {
  .collage-container {
    display: flex;
    flex-direction: column;
  }

  .collage-left-side {
    margin-top: 0.825rem;
  }

  .collage-left-side-item-above {
    margin-top: 0.825rem;
  }

  .collage-right-side-item {
    margin-top: 0.825rem;
  }

  .collage-right-side-item-above {
    margin-top: 0.825rem;
  }
}

@media (min-width: 640px) {
  .collage-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .collage-left-side {
    position: relative;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .collage-right-side {
    position: relative;
    width: 100%;
    margin-top: 3rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding-bottom: 20%;
  }

  .collage-left-side-item {
    width: 70%;
    margin-top: 20%;
    margin-right: -17%;
    flex: 0 auto;
  }

  .collage-left-side-item-above {
    flex: 1;
  }

  .collage-right-side-item {
    width: 70%;
    margin-left: auto;
    flex: 0 auto;
  }

  .collage-right-side-item-above {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 45%;
  }
}

.collage-left-side-item-above, .collage-right-side-item-above {
  z-index: 10;
}
</style>
