<template>
  <main>
    <vue-headful
      title="Joshua Paul Jacob"
      description="Joshua Paul Jacob's Website"
    />
    <preloader />
    <decorations />
    <customMenu />
    <landing class="section" />
    <about class="section" />
  </main>
</template>

<script>
import Preloader from "../components/Preloader.vue";
import Decorations from "../components/Decorations.vue";
import CustomMenu from "../components/CustomMenu.vue";
import Landing from "../components/home/Landing.vue";
import About from "../components/home/About.vue";

export default {
  components: {
    Preloader,
    Decorations,
    CustomMenu,
    Landing,
    About,
  },
};
</script>

<style>
.section {
  max-width: 1600px;
  margin: auto;
}
</style>
