<template>
  <div id="app">
    <preloader />
    <decorations />
    <customMenu />
    <landing>
      <!-- <transition name="fade"> -->
      <router-view />
      <!-- </transition> -->
    </landing>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Alata&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  /* background-color: black; */
  height: 100%;
  font-family: "Roboto Mono", Helvetica, sans-serif;
  color: white;
}

a {
  text-decoration: none;
  color: gray;
  font-weight: lighter;
  transition: 0.3s ease-in-out;
}

a:hover {
  color: lightgray;
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
} */
</style>

<script>
import Preloader from "@/components/Preloader.vue";
import Decorations from "@/components/Decorations.vue";
import CustomMenu from "@/components/CustomMenu.vue";
import Landing from "@/components/home/Landing.vue";

export default {
  components: {
    Preloader,
    Decorations,
    CustomMenu,
    Landing,
  },
};
</script>
