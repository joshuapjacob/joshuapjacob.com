<template>
  <div id="main">
    <Header/>
    <div class="marquee">
      <div class="track">
        <div class="content">&nbsp;Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence</div>
      </div>
    </div>
    <!-- <Landing/>
    <About/>
    <Projects/>
    <Now/>
    <Contact/> -->
  </div>
</template>

<script>
import Header from './components/base/Header.vue'
// import Projects from './components/Projects.vue'

export default {
  name: 'Main',
  components: {
    Header
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


@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');

.marquee {
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 200px;
  overflow-x: hidden;
  opacity: 0.1;
}

.track {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.content {
  color: white;
  font-family: 'Bebas Neue', cursive;
  font-size: 144px;
}

</style>
