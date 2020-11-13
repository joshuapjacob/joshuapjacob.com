<template>
  <main>
    <vue-headful
      title="Joshua Paul Jacob"
      description="Joshua Paul Jacob's Website"
    />
    <preloader />
    <decorations />
    <customMenu />
    <landing class="section">
      <div class="center">
        <div id="full_name">
          <div id="first_names" class="name">/ Joshua Paul</div>
          <div id="last_name" class="name">Jacob /</div>
        </div>
      </div>
    </landing>
    <about class="section" />
    <!-- <projectHighlights class="section" /> -->
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

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* NAME --------------------------------------------------------------------- */

#first_names {
  -webkit-text-stroke: 1px white;
  color: white;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

#last_name {
  color: white;
}

.name {
  font-family: "Alata", sans-serif;
  font-size: 9rem;
}

@media only screen and (max-width: 600px) {
  .name {
    font-size: 4rem;
  }
}
</style>
