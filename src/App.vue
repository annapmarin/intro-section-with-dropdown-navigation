<template>
  <NavBar />
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
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
    overflow: hidden;
  }

  body {
    background-color: $white;
  }


</style>
