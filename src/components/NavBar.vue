<template>
  <nav>
    <div class="nav">
      <img :src="require('../assets/images/logo.svg')" alt="" />
    <div v-show="active === true" class="dropdown">
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
    <div v-show="active2 === true" id="dd2" class="dropdown">
      <ul class="dropdown__list">
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </div>
    <div class="nav__list">
      <button @click="setActive()" :class="[active === true ? 'btn-active' : '']" class="btn">Features <img :src="require('../assets/images/icon-arrow-up.svg')" alt="" /></button>
      <button @click="setActive2()" :class="[active2 === true ? 'btn-active' : '']" class="btn">Company <img :src="require('../assets/images/icon-arrow-up.svg')" alt="" /> </button>
      <button class="btn">Careers</button>
      <button class="btn">About</button>
    </div>
    </div>
    <div class="nav__buttons">
      <BtnNormal />
      <BtnOutlined />
    </div>
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

</script>

<style lang="scss" scoped>
  @import '../variables.scss';

  nav {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 3rem;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 3rem;

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
  }

  .dropdown {
  position: absolute;
  top: 60px;
  left: 130px;
  border: 1px solid transparent;
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

</style>