<template>
  <div id="decorations">
    <div id="left-decorations">
      <div class="vl"></div>
      <div id="email">
        <a
          href="mailto:contact@joshuapjacob.com?subject=Hello"
          target="_blank"
          title="Email"
          >contact @ joshuapjacob.com</a
        >
      </div>
      <div class="vl"></div>
      <div id="social">
        <a href="https://www.instagram.com/joshuapjacob/" title="Instagram"
          ><img src="@/assets/icons/instagram-brands.svg"
        /></a>
        <a href="https://www.linkedin.com/in/joshuapjacob/" title="LinkedIn"
          ><img src="@/assets/icons/linkedin-brands.svg"
        /></a>
        <a href="https://github.com/joshuapjacob" title="GitHub"
          ><img src="@/assets/icons/github-brands.svg"
        /></a>
        <a href="https://www.youtube.com/user/lrccomedy" title="YouTube"
          ><img src="@/assets/icons/youtube-brands.svg"
        /></a>
        <a
          href="https://www.goodreads.com/user/show/57891424-joshua-paul-jacob"
          title="Goodreads"
          ><img src="@/assets/icons/goodreads-brands.svg"
        /></a>
      </div>
      <div class="vl"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "decorations",
};
</script>

<style scoped>
#decorations {
  position: fixed;
  left: 0;
  z-index: 10;
}

#left-decorations {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3vw;
}

/* VERTICAL LINES ----------------------------------------------------------- */

.vl {
  width: 1px;
  background-color: grey;
  flex-grow: 1;
}

#email,
#social {
  margin: 10px 0;
}

/* EMAIL "CONTACT ME" ------------------------------------------------------- */

#email {
  writing-mode: vertical-lr;
  transform: translateX(-2px) rotate(180deg);
}

a {
  text-decoration: none;
  color: grey;
  font-family: "Lato", sans-serif;
  font-size: 1.3rem;
  font-weight: 300;
  margin: 10px;
  transition: 0.3s ease;
}

a:hover {
  color: lightgrey;
  transform: translateX(1px);
}

/* SOCIAL MEDIA ICONS ------------------------------------------------------- */

#social {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#social img {
  /* https://codepen.io/sosuke/pen/Pjoqqp */
  filter: invert(50%);
  width: 20px;
  transition: 0.3s ease;
}

#social img:hover {
  filter: invert(85%);
}
</style>
