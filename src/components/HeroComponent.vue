<template>
  <main>
    <div class="img-container--mobile">
      <img :src="require('../assets/images/image-hero-mobile.png')" />
    </div>
    <div class="text-container">
      <h1>Make remote work</h1>
      <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
      <button class="btn-main">Learn more</button>
      <div class="text-container__logos">
        <img :src="require('../assets/images/client-databiz.svg')" />
        <img :src="require('../assets/images/client-audiophile.svg')" />
        <img :src="require('../assets/images/client-meet.svg')" />
        <img :src="require('../assets/images/client-maker.svg')" />
      </div>
    </div>
    <div class="img-container">
      <img :src="require('../assets/images/image-hero-desktop.png')" />
    </div>
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../variables.scss';

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  max-height: 80%;

  .img-container--mobile {
    display: none;
  }

  .text-container {
    margin: 0 0 0 150px;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1 {
      font-size: 4rem;
      padding-right: 3rem;
    }

    p {
      color: $grey;
      margin-right: 4rem;
      text-align: justify;
      line-height: 1.6rem;
    }

    &__logos {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;
      gap: 2rem;
      padding-top: 3rem;
    }
  }

  .img-container {
    img {
      max-width: 700px;
      padding: 119px;
    }
  }
}

.btn-main {
  font-family: 'Epilogue', sans-serif;
  border: 1px solid $black;
  background-color: $black;
  color: $white;
  border: none;
  padding: .8rem 1.2rem;
  font-size: .8rem;
  border-radius: .7rem;
  cursor: pointer;
  max-width: 8rem;
  font-weight: 700;

  &:hover {
    color: $black;
    background-color: $white;
    border: 1px solid $black;
  }
}

@media screen and (max-width: 1110px) {
  main {
    display: flex;
    flex-direction: column;

    .img-container--mobile {
      display: block;

      img {
        width: 100%;
        max-width: 25rem;
      }
    } 

    .text-container {
      gap: 2rem;
      margin: 2rem;
      
      h1 {
        font-size: 2rem;
        padding: 0;
        text-align: center;
        padding: .3rem;
      }

      p {
        margin: 0;
        text-align: center;
      }

      .btn-main {
        margin: 0 auto;
      }

      &__logos {
        max-width: 100vw;
        justify-content: center;
        padding: 1rem 2rem;
        gap: 1rem;

        img {
          width: 3.8rem;
        }
      }
    }

    .img-container {
      display: none;
    }
  }

  }

</style>