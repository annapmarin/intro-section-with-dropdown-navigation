<template>
  <button class="btn">
    Login
  </button>
</template>

<style lang="scss">
@import '../variables.scss';

.btn {
  background-color: transparent;
  border: none;
  font-family: 'Epilogue', sans-serif;
  color: $grey;
  font-size: .8rem;

  &:hover {
    color: $black;
    cursor: pointer;
  }
}

</style>