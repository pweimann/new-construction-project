<template>
  <section class='bg-white py-20' ref='main'>
    <FadeInTransition>
      <div class='container mx-auto px-4'>
        <div class='w-3/4 mx-auto text-center'>
          <h2 class='text-dark-rosa text-2xl md:text-5xl font-bold uppercase leading-tight mb-4'>construction berlin
            kreuzberg</h2>
          <p class='text-dark-rosa text-1xl md:text-3xl leading-normal mb-4'>Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
        </div>
      </div>
      <div class='collage-container mt-8 md:mt-16 px-4 w-full'>
        <FadeInTransition>
          <div class='collage-left-side'>
            <img src='/renderings/Persp1.jpg' alt='Image 1'
                 class='collage-left-side-item rounded-3xl object-cover collage-left-side-first'>
            <img src='/renderings/Persp2.jpg' alt='Image 1'
                 class='collage-left-side-item-above sm:w-1/6 rounded-3xl object-cover collage-left-side-second'>
          </div>
        </FadeInTransition>
        <FadeInTransition>
          <div class='collage-right-side'>
            <img src='/renderings/Persp3.jpg' alt='Image 1'
                 class='collage-right-side-item rounded-3xl object-cover'>
            <img src='/renderings/Persp4.jpg' alt='Image 1'
                 class='collage-right-side-item-above md:w-1/6 rounded-3xl object-cover'>
          </div>
        </FadeInTransition>
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
    padding-bottom: 250px;
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
