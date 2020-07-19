<template>
  <main>
    <vue-headful
      title="Joshua Paul Jacob"
      description="Joshua Paul Jacob's Website"
    />
    <preloader />
    <h1>Hello</h1>
  </main>
</template>

<script>
import Preloader from "../components/Preloader.vue";

export default {
  components: {
    Preloader,
  },
};
</script>
