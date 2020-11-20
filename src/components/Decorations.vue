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
        <a
          href="https://www.instagram.com/joshuapjacob"
          target="_blank"
          title="Instagram "
          ><img src="@/assets/icons/instagram-brands.svg"
        /></a>
        <a
          href="https://www.linkedin.com/in/joshuapjacob/"
          target="_blank"
          title="LinkedIn "
          ><img src="@/assets/icons/linkedin-brands.svg"
        /></a>
        <a
          href="https://t.me/joshuapjacob"
          target="_blank"
          title="Telegram "
          ><img src="@/assets/icons/telegram-plane-brands.svg"
        /></a>
        <a
          href="https://github.com/joshuapjacob/"
          target="_blank"
          title="GitHub "
          ><img src="@/assets/icons/github-brands.svg"
        /></a>
        <!-- <a
          href="https://www.youtube.com/user/lrccomedy"
          target="_blank"
          title="YouTube "
          ><img src="@/assets/icons/youtube-brands.svg"
        /></a> -->
        <a
          href="https://www.goodreads.com/user/show/57891424-joshua-paul-jacob"
          target="_blank"
          title="Goodreads "
          ><img src="@/assets/icons/goodreads-brands.svg"
        /></a>
      </div>
      <div class="vl"></div>
    </div>
    <div id="language" @click="switchLocale" title="Change Language">
      <span class="active" id="en">EN</span>/<span class="inactive" id="fr"
        >FR</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "decorations",
  methods: {
    switchLocale() {
      if (this.$i18n.locale === "en") {
        document.querySelector("#en").classList.replace("active", "inactive");
        this.$i18n.locale = "fr";
        document.querySelector("#fr").classList.replace("inactive", "active");
      } else {
        document.querySelector("#fr").classList.replace("active", "inactive");
        this.$i18n.locale = "en";
        document.querySelector("#en").classList.replace("inactive", "active");
      }
    },
  },
};
</script>

<style scoped>
#decorations {
  position: fixed;
  z-index: 10;
}

#left-decorations {
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3vw;
}

/* LANGUAGE ----------------------------------------------------------------- */

#language {
  position: fixed;
  right: 0;
  top: 0;
  margin: 3vw;
  color: grey;
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  transform: translateX(3px);
  font-weight: 300;
  cursor: pointer;
}

#language span {
  transition: 0.3s ease;
}

#language .inactive {
  opacity: 0.5;
}

#language:hover .inactive {
  opacity: 1;
  color: lightgrey;
}

#language:hover .active {
  opacity: 0.5;
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
  font-family: "Roboto Mono", monospace;
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
