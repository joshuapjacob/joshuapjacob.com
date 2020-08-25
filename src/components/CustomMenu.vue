<template>
  <div id="menu">
    <div id="burger" :class="{ active: isActive }" @click.prevent="toggle">
      <button type="button" class="burger-button" title="Menu">
        <span class="burger-bar" id="burger-bar--1"></span>
        <span class="burger-bar" id="burger-bar--2"></span>
      </button>
      <!-- <p>Menu</p> -->
    </div>
    <div id="sidebar">
      <transition name="fade">
        <div id="sidebar-backdrop" @click="toggle" v-if="isActive"></div>
      </transition>
      <transition name="slide">
        <div v-if="isActive" id="sidebar-panel">
          <h2>This menu is also under construction...</h2>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
/* BURGER ICON -------------------------------------------------------------- */
#burger {
  position: fixed;
  transform: translate(0, -50%) rotate(270deg);
  right: 5%;
  top: 50%;
  align-items: center;
  display: flex;
  z-index: 99;
}

button {
  cursor: pointer;
}

button:focus {
  outline: 0;
}

.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: grey;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 1.5px;
  width: auto;
  margin-top: 1.5px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s,
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

#burger-bar--1 {
  transform: translateY(-6px);
}

#burger:hover .burger-bar {
  background-color: lightgrey;
}

/*
#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: lightgrey;
}

#burger.active #burger-bar--1 {
  transform: translateY(-2px) rotate(45deg);
}

#burger.active #burger-bar--2 {
  transform: translateY(-2px) rotate(-45deg);
} */

/* BURGER "MENU" HINT ------------------------------------------------------- */

p {
  position: absolute;
  transform: translate(33px, -2px);
  font-family: "Lato", sans-serif;
  font-size: 12px;
  color: grey;
  transition: 0.3s ease-in-out;
  opacity: 0;
}

button:hover + p {
  opacity: 1;
}
#burger.active p {
  opacity: 0;
}

/* SIDEBAR MENU ------------------------------------------------------------- */

#sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

#sidebar-panel {
  overflow-y: auto;
  background-color: white;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 99;
  padding: 3rem 20px 2rem 20px;
  width: 80vw;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -20px 0px 80px 0px rgba(0, 0, 0, 0.75);
}

@media only screen and (max-width: 600px) {
  #sidebar-panel {
    width: 100vw;
  }
}

#sidebar-panel h2 {
  font-weight: normal;
}

/* TRANSITIONS -------------------------------------------------------------- */

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(+100%);
  transition: all 0.5s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
</style>
