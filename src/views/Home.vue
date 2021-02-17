<template>
  <main>
    <vue-headful
      title="Joshua Paul Jacob"
      description="Joshua Paul Jacob's Website"
    />

    <marquees text="JOSHUA PAUL JACOB" :duration="17" />

    <div id="welcome" class="section">
      <div class="center">
        <div id="full_name">
          <div id="first_names" title="/ Joshua Paul" class="name">/ Joshua Paul</div>
          <div id="last_name" class="name">Jacob /</div>
        </div>
      </div>

      <a
        id="scroll-button"
        href="#"
        v-scroll-to="{ el: '#about', duration: 700, easing: 'ease-in-out' }"
      >
        <img src="@/assets/icons/down-arrow.png" />
      </a>
    </div>

    <about id="about" class="section" />
    <!-- <projectHighlights class="section" /> -->
    <div class="section">
      <h1 id="test">HELLO</h1>
    </div>
    <div>Designed & Built by Joshua P. Jacob (add github stats)</div>
  </main>
</template>

<script>
import About from "@/components/home/About.vue";
import Marquees from "@/components/Marquees.vue";

export default {
  components: {
    About,
    Marquees,
  },
};
</script>

<style>
.section {
  margin: auto;
}

#welcome {
  height: 100vh;
}

.center {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
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

/* SCROLL BUTTON ------------------------------------------------------------ */

#scroll-button {
  position: absolute;
  bottom: 50px;
  cursor: pointer;
  opacity: 0.5;
  transform: translate(-50%, -50%);
  left: 50%;
  filter: invert(50%);
  transition: 0.3s ease;
}

#scroll-button:hover {
  filter: invert(85%);
}

#scroll-button img {
  width: 25px;
}
</style>
