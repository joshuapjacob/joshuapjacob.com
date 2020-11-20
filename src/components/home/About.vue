<template>
  <div id="about" class="section">

    <h1>About Me</h1>
    <p>I'm 19 years old. I live in Paris, France. I'm Indian.</p>
    <p>
      (PERSONALITY) I love learning and discovering new things. I like design
      and technology that's involed in design (web dev, etc) marketing. I enjoy
      bridging the gap between engineering and design — combining my technical
      knowledge with my keen eye for design to create a beautiful product. or
      crossing off another item on my ultimate (bucket) list. I'm a
      perfectionist. I like to create. More than anything, I want to make lots of stuff. I want to make articles, books, websites, music, companies, systems, apps, and especially new ideas.
    </p>

    <p>I'm afraid of heights...</p>

    <p>I have visited 25 countries.</p>
    <!-- https://support.google.com/mymaps/answer/3024454?hl=en&amp;ref_topic=3188329 -->

    <p>
      (TECHNICAL SKILLS) I can code/script in the some languages: Python, HTML5,
      CSS, JavaScript (ES6), Node, Vue.js C++, OCaml. Docker, DigitalOcean
    </p>

    <p>I'm open to freelance work.</p>

    <p>
      (TECHNICAL PERSONALITY) I'm a Linux enthusiast ('ricer') who has his
      dotfiles under version control. I use Arch btw. interested in open-source
    </p>

    <p>
      (LANGUAGES) I'm fluent in English and French. I know a little Hindi and
      Tamil. I'm trying to pick up some Arabic through
      <a href="https://www.duolingo.com/profile/joshuapjacob">Duolingo</a>.
    </p>

    <p>Astrology: no.</p>

    <p>
      (STUDENT STUFF) I'm a final-year bachelor student at
      <a
        href="https://programmes.polytechnique.edu/en/bachelor/bachelor-of-science"
        >École Polytechnique</a
      >
      majoring in mathematics and computer science.
    </p>

    <p>
      (CAREER) I'm interested in pursuing a career in strategy consulting
      particularly digital transformation/disruption. Internship at Loreal.
    </p>

    <p>(ACADEMIA) Bachelor Thesis</p>

    <p>(SOCIAL STUFF) gig economy, open-source development, libertarian.</p>

    <p>
      Some of my favorite books are:
      <a href="https://www.goodreads.com/book/show/4981.Slaughterhouse_Five"
        >Kurt Vonnegut's Slautherhouse-Five</a
      >,
      <a href="https://www.goodreads.com/book/show/31920777-american-kingpin"
        >Nick Bilton's American Kingpin</a
      >, and
      <a href="https://www.goodreads.com/book/show/3228917-outliers"
        >Malcom Gladwell's Outliers</a
      >.
    </p>

    <p>
      Some of my favorite movies are:
      <a href="https://www.imdb.com/title/tt0887883/?ref_=rt_li_tt"
        >Burn After Reading (2008)</a
      >,
      <a href="https://www.imdb.com/title/tt0407887/?ref_=rt_li_tt"
        >The Departed (2006)</a
      >,
      <a href="https://www.imdb.com/title/tt0361748/">Inglourious Bastards</a>,
      <a href="https://www.imdb.com/title/tt6751668/?ref_=rt_li_tt"
        >Parisite (2019)</a
      >, and
      <a href="https://www.imdb.com/title/tt1104001/?ref_=rt_li_tt"
        >Tron (2010)</a
      >.
    </p>

    <p>
      Some of my favorite TV shows are:
      <a href="https://www.imdb.com/title/tt2575988/?ref_=rt_li_tt"
        >Silicon Valley</a
      >,
      <a href="https://www.imdb.com/title/tt2861424/?ref_=rt_li_tt"
        >Rick And Morty</a
      >,
      <a href="https://www.imdb.com/title/tt4367560/?ref_=rt_li_tt"
        >Au service de la France</a
      >.
    </p>

    <p>
      Some of my favorite music can be found
      <a
        href="https://open.spotify.com/playlist/7rVRGTpLJoOK2sODz2e3yW?si=VEZR-q1-S9CWqrIJqMt0qQ"
        >here</a
      >
      and
      <a
        href="https://open.spotify.com/playlist/17jh62U1wx52u7aBj0K724?si=0cGsaH6EQK-NohMYzO7D0w"
        >here</a
      >.
    </p>

    <p>
      Some of my favorite video games are:
      <a
        href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
        >Counter Strike: Global Offensive</a
      >, <a href="https://www.minecraft.net/fr-fr">Minecraft</a>, and
      <a href="https://store.steampowered.com/agecheck/app/219150/"
        >Hotline Miami</a
      >.
    </p>

    <p><router-link to="/now">NOW</router-link> AND ULTIMATE</p>

    <div id="test"></div>

    <p>Feel free to get in touch! My inbox is always open.</p>
    <div id="under_construction">
      <h2>{{ $t("underConstruction.message") }}</h2>
      <a
        href="https://github.com/joshuapjacob/joshuapjacob.com"
        target="_blank"
      >
        &lt; {{ $t("underConstruction.sourceCode") }} /&gt;
      </a>


      TO INCLUDE: - BIO: Your education Your skills and expertise Your latest
      job or project you worked on
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
#about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  font-weight: normal;
}

p {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  padding: 5px;
  margin: 10px;
}

/* UNDER CONSTRUCTION ------------------------------------------------------- */

#under_construction {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
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
