<template>
  <NavBar />
  <Hero />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/HeroComponent.vue'

</script>
<style lang="scss">
@import './variables.scss';
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Epilogue', sans-serif;
    font-size: 18px;
    color: $black;
  }

  body {
    background-color: $white;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
  }


</style>
