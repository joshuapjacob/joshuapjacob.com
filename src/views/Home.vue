<template>
  <main>
    <vue-headful
      title="Joshua Paul Jacob"
      description="Joshua Paul Jacob's Website"
    />
    <preloader />
    <customHeader />
    <customMenu />
    <landing />
    <about />
  </main>
</template>

<script>
import Preloader from "../components/Preloader.vue";
import CustomHeader from "../components/CustomHeader.vue";
import CustomMenu from "../components/CustomMenu.vue";
import Landing from "../components/home/Landing.vue";
import About from "../components/home/About.vue";

export default {
  components: {
    Preloader,
    CustomHeader,
    CustomMenu,
    Landing,
    About,
  },
};
</script>

<style scoped>
main {
  max-width: 1600px;
}
</style>
