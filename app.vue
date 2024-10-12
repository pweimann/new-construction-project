<template>
  <div>
    <LoadingScreen v-if="!entered" @enter="entered = true" />
    <template v-else>
      <header>
        <!-- Header content goes here -->
      </header>
      <main>
        <NuxtPage></NuxtPage>
      </main>
      <footer>
        <!-- Footer content goes here -->
      </footer>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoadingScreen from './components/LoadingScreen.vue'

const entered = ref(false)
</script>

<style lang='css'>
* {
  font-family: Copperplate, Roboto, SansSerif;
}

body {
  background-color: black;
  color: white;
}
</style>
