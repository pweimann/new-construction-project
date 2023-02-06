<template>
  <section class='py-10 md:py-16 bg-dark-rosa'>
    <div class=' container mx-auto '>
      <div id='imageSlider' class='carousel slide relative' data-bs-ride='carousel'
           data-bs-interval='false'>
        <div class='carousel-inner relative w-full overflow-hidden'>
          <div class='carousel-item active float-left w-full'>
            <nuxt-img
              src='/grundrisse/U2.neu.png'
              class='block w-full'
              alt=''
              preload
            />
          </div>
          <div class='carousel-item float-left w-full'>
            <nuxt-img
              src='/grundrisse/U1.neu.png'
              class='block w-full'
              alt=''
              preload
            />
          </div>
          <div class='carousel-item float-left w-full'>
            <nuxt-img
              src='/grundrisse/EG.neu.png'
              class='block w-full'
              alt=''
              preload
            />
          </div>
          <div class='carousel-item float-left w-full'>
            <nuxt-img
              src='/grundrisse/1.png'
              class='block w-full'
              alt=''
              preload
            />
          </div>
          <div class='carousel-item float-left w-full'>
            <nuxt-img
              src='/grundrisse/6.png'
              class='block w-full'
              alt=''
              preload
            />
          </div>
          <div class='carousel-item float-left w-full'>
            <nuxt-img
              src='/grundrisse/7_neu.png'
              class='block w-full'
              alt=''
              preload
            />
          </div>
          <div class='carousel-item float-left w-full'>
            <nuxt-img
              src='/grundrisse/8.neu.png'
              class='block w-full'
              alt=''
              preload
            />
          </div>
        </div>
        <button
          class='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
          type='button'
          data-bs-target='#imageSlider'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon inline-block bg-no-repeat' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'
          type='button'
          data-bs-target='#imageSlider'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon inline-block bg-no-repeat' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
// TODO implement a reusable component
</script>

<style scoped>
.carousel-control-next {

}
</style>
