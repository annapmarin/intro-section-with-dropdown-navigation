<template>
  <button class="btn btn-outline">
    Register
  </button>
</template>

<style lang="scss">
@import '../variables.scss';

.btn-outline {
  border: 1px solid $grey;
  padding: .5rem .8rem;
  border-radius: .7rem;

  &:hover {
    border: 1px solid $black;
  }
}

</style>