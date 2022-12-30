<template>
  <section class='bg-white py-8'>
    <div class='container mx-auto px-4'>
      <div class='w-3/4 mx-auto text-center'>
        <h2 class='text-dark-rosa text-2xl md:text-5xl font-bold uppercase leading-tight mb-4'>construction berlin
          kreuzberg</h2>
        <p class='text-dark-rosa text-1xl md:text-3xl leading-normal mb-4'>Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
      </div>
    </div>
    <div class='collage-container mt-8 md:mt-16 px-12 w-full'>
      <div class='collage-left-side'>
        <img src='/placeholder.jpg' alt='Image 1'
             class='collage-left-side-item rounded-3xl object-cover'>
        <img src='/placeholder.jpg' alt='Image 1'
             class='collage-left-side-item-above md:w-1/6 rounded-3xl object-cover'>
      </div>
      <div class='collage-right-side'>
        <div class='collage-right-side-inner'>
          <img src='/placeholder.jpg' alt='Image 1'
               class='collage-right-side-item rounded-3xl object-cover'>
          <img src='/placeholder.jpg' alt='Image 1'
               class='collage-right-side-item-above md:w-1/6 rounded-3xl object-cover'>
        </div>
      </div>
    </div>
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

@media (min-width: 768px) {
  .collage-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .collage-left-side {
    position: relative;
    width: 47%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .collage-right-side {
    position: relative;
    width: 47%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
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
    margin-top: 20%;
    margin-left: auto;
    flex: 0 auto;
  }

  .collage-right-side-item-above {
    position: absolute;
    left: -10%;
    top: auto;
    right: auto;
    bottom: -10%;
    width: 70%;
  }

  .collage-right-side-inner {
    position: relative;
    width: 90%;
    min-height: 425px;
    margin-top: 5%;
    margin-bottom: 12%;
  }
}
</style>
