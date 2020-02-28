<template>
  <div id="main">
    <!-- <Header/> -->
    <LandingSection/>
    <AboutSection/>
    <ProjectHighlightsSection/>
    <NowSection/>
    <ContactSection/>
    <Footer/>
  </div>
</template>

<script>
// import Header from './components/base/Header.vue'
import LandingSection from './components/sections/LandingSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ProjectHighlightsSection from './components/sections/ProjectHighlightsSection.vue'
import NowSection from './components/sections/NowSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import Footer from './components/base/Footer.vue'

export default {
  name: 'Main',
  components: {
    // Header,
    LandingSection,
    AboutSection,
    ProjectHighlightsSection,
    NowSection,
    ContactSection,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

#main {
  background-color: black;
  height: 100%;
  width: 100%;
}
/* Fonts */
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');

</style>
