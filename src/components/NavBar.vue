<template>
  <nav>
    <div class="nav">
      <a href="#"><img :src="require('../assets/images/logo.svg')" alt="" /></a>
      <img @click="openMenu()" class="nav__icon-menu" :src="require('../assets/images/icon-menu.svg')" alt="open menu" />
    <div id="menu-desktop" class="nav__list">
      <img @click="openMenu()" class="nav__icon-close" :src="require('../assets/images/icon-close-menu.svg')" alt="close menu" />
      <button @click="setActive()" @mouseover="setActive()" :class="[active === true ? 'btn-active' : '']" class="btn">Features <img :src="require('../assets/images/icon-arrow-up.svg')" alt="" /></button>
      <div @mouseout="setActive()" v-show="active === true" class="dropdown">
        <ul class="dropdown__list">
          <li>
            <img :src="require('../assets/images/icon-todo.svg')" />
            <a>Todo List</a>
          </li>
          <li>
            <img :src="require('../assets/images/icon-calendar.svg')" />
            <a>Calendar</a>
          </li>
          <li>
            <img :src="require('../assets/images/icon-reminders.svg')" />
            <a>Reminders</a>
          </li>
          <li>
            <img :src="require('../assets/images/icon-planning.svg')" />
            <a>Planning</a>
          </li>
        </ul>
      </div>
      <button @mouseover="setActive2()" @click="setActive2()" :class="[active2 === true ? 'btn-active' : '']" class="btn">Company <img :src="require('../assets/images/icon-arrow-up.svg')" alt="" /> </button>
      <div @mouseout="setActive2()" v-show="active2 === true" id="dd2" class="dropdown">
      <ul class="dropdown__list">
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
      </div>
      <button class="btn">Careers</button>
      <button class="btn">About</button>
      <div class="nav__buttons--mobile">
        <BtnNormal />
        <BtnOutlined />
      </div>
    </div>
    <div id="menu" v-show="menu === true" class="nav__list">
      <img @click="openMenu()" class="nav__icon-close" :src="require('../assets/images/icon-close-menu.svg')" alt="close menu" />
      <button @click="setActive()" @mouseover="setActive()" :class="[active === true ? 'btn-active' : '']" class="btn">Features <img :src="require('../assets/images/icon-arrow-up.svg')" alt="" /></button>
      <div @mouseout="setActive()" v-show="active === true" class="dropdown">
        <ul class="dropdown__list">
          <li>
            <img :src="require('../assets/images/icon-todo.svg')" />
            <a>Todo List</a>
          </li>
          <li>
            <img :src="require('../assets/images/icon-calendar.svg')" />
            <a>Calendar</a>
          </li>
          <li>
            <img :src="require('../assets/images/icon-reminders.svg')" />
            <a>Reminders</a>
          </li>
          <li>
            <img :src="require('../assets/images/icon-planning.svg')" />
            <a>Planning</a>
          </li>
        </ul>
      </div>
      <button @mouseover="setActive2()" @click="setActive2()" :class="[active2 === true ? 'btn-active' : '']" class="btn">Company <img :src="require('../assets/images/icon-arrow-up.svg')" alt="" /> </button>
      <div @mouseout="setActive2()" v-show="active2 === true" id="dd2" class="dropdown">
      <ul class="dropdown__list">
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
      </div>
      <button class="btn">Careers</button>
      <button class="btn">About</button>
      <div class="nav__buttons--mobile">
        <BtnNormal />
        <BtnOutlined />
      </div>
    </div>
    </div>
    <div class="nav__buttons">
      <BtnNormal />
      <BtnOutlined />
    </div>
    <div v-show="menu === true" id="black-layout" class="black-layout"></div>
  </nav>
</template>

<script setup>
import BtnNormal from './BtnNormal.vue';
import BtnOutlined from './BtnOutlined.vue';
import { ref } from 'vue';

let active = ref(false);
let active2 = ref(false);

const setActive = () => {
  if(active.value === false) {
    active.value = true;
  } else if (active.value === true) {
    active.value = false;
  }
}

const setActive2 = () => {
  if(active2.value === false) {
    active2.value = true;
  } else if (active2.value === true) {
    active2.value = false;
  }
}

let menu = ref(false)

const openMenu = () => {
  if(menu.value === false) {
    menu.value = true;
  } else if (menu.value === true) {
    menu.value = false;
  }
}

</script>

<style lang="scss" scoped>
  @import '../variables.scss';

@media screen and (max-width: 800px) {
  nav {
    padding: 1.2rem;
  }

  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &__icon-menu {
      cursor: pointer;
    }

    &__icon-close {
      width: 1.5rem;
      position: absolute;
      right: 1.2rem;
      top: 1.4rem;
      cursor: pointer;
    }

    &__list {
      position: absolute;
      display: flex;
      flex-direction: column;
      right: 0;
      top: 0;
      background-color: $white;
      height: 100vh;
      width: 250px;
      padding-top: 5rem;
      gap: 1rem;
      transition: .3s ease-in-out;
      flex-wrap: wrap;
      align-content: flex-start;
      padding-left: 2rem;
      z-index: 2;

      button {
        font-size: .9rem;
        text-align: left;

        img {
          transition: .3s ease-in-out;
        }
      }

      button:hover img {
        transform: rotate(180deg);
        transition: .2s ease-in-out;
      }

      .dropdown__list {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        justify-content: center;
        align-items: flex-start;

        li {
          display: flex;
          align-items: center;
          gap: .4rem;
          cursor: pointer;
          font-size: .9rem;
          color: $grey;
        }
      }

      .btn-active {
        color: $black;

        img {
          transform: rotate(180deg);
          transition: .2s ease-in-out;
        }
      }
    }

    &__buttons {
      display: none;
    }

    &__buttons--mobile {
      display: flex;
      flex-direction: column;
      margin: 2rem 1.5rem;
      gap: 1rem;

      button {
        text-align: center;
      }
    }
  }
  .black-layout {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: hsla(0, 0%, 0%, 0.6);

    &--active {
      display: block;
    }
  }

  #menu-desktop {
  display: none;
}
}

@media screen and (min-width: 800px) {
  nav {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 3rem;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 3rem;

    &__icon-menu {
      display: none;
    }

    &__icon-close {
      display: none;
    }

    &__list {
      display: flex;
      list-style: none;
      gap: 2.2rem;

      button {
        display: flex;
        align-items: center;
        gap: .4rem;
        cursor: pointer;

        img {
          transition: .3s ease-in-out;
        }
      }

      button:hover img {
        transform: rotate(180deg);
        transition: .2s ease-in-out;
      }

      li {
        display: flex;
        align-items: center;
        gap: .4rem;
        cursor: pointer;
      }
      .btn-active {
        color: $black;

        img {
          transform: rotate(180deg);
          transition: .2s ease-in-out;
        }
      }
    }

    &__link {
      text-decoration: none;
      font-size: .8rem;
      color: $grey;

      &:hover {
        color: $black;
      }
    }

    &__buttons {
      display: flex;
      align-items: row;
      gap: 1rem;
    }

    &__buttons--mobile {
      display: none;
    }

  }

  .dropdown {
  position: absolute;
  top: 60px;
  left: 130px;
  border: 1px solid $white;
  background-color: $white;
  padding: 15px 15px;
  border-radius: 10px;
  box-shadow: 1px 1px 20px grey;
  width: 150px;
  transition: .4s ease-in;
  

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      font-size: .8rem;
      color: $grey;
      display: flex;
      align-items: center;
      justify-content: left;
      flex-direction: row;
      gap: 15px;
      height: 20px;
      cursor: pointer;

      &:hover {
        color: $black;
      }
    }
  }
}

#dd2 {
  left: 300px;
  width: fit-content;
} 

.black-layout {
  display: none;
}
}

</style>