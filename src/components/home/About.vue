<template>
  <div id="about" class="section">
    <h2>This website is (still) under construction...</h2>
    <a href="https://github.com/joshuapjacob/joshuapjacob.com" target="_blank">
      &lt; Source Code /&gt;
    </a>
    <!-- <div id="img_container">
      <div id="img_decoration"></div>
      <img src="@/assets/JoshuaPaulJacob.jpg" alt="Joshua Paul Jacob" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
#about {
  background-color: black;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100vw;
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

h2 {
  font-weight: normal;
}

/* IMAGE -------------------------------------------------------------------- */

#img_container {
  position: relative;
  margin: 50px 25px;
}

img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  height: 500px;
  /* -webkit-box-shadow: 25px 25px 0px 0px rgba(48, 48, 48, 1);
  -moz-box-shadow: 25px 25px 0px 0px rgba(48, 48, 48, 1);
  box-shadow: 25px 25px 0px 0px rgba(48, 48, 48, 1); */
  transition: 0.5s ease;
}

img:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
}

#img_decoration {
  border: 1px solid white;
  position: absolute;
  bottom: -25px;
  right: -25px;
  width: 400px;
  height: 500px;
}
</style>
