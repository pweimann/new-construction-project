<template>
  <section>
    <div class='bg-image'></div>
  </section>
</template>
<style lang='css' scoped>
.bg-image {
  background-image: url("/renderings/persp8.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  min-height: 32vh;
  width: 100%;
}

@media (min-width: 640px) {
  .bg-image {
    min-height: 70vh;
  }
}
</style>
