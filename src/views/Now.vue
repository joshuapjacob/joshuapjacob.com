<template>
  <div>
    <vue-headful
      title="Now - Joshua Paul Jacob"
      description="Joshua Paul Jacob's Now Page"
    />

    <marquees text="NOW" :duration="3" />

    <div class="container">
      <div id="header" class="block">
        <h1>What am I up to now?</h1>
        <p>
          I periodically update this page with what is currently going on in my
          life.
        </p>
      </div>

      <div class="text block">
        I'm a final-year student working towards a bachelor's degree in
        mathematics and computer science at
        <a href="https://programmes.polytechnique.edu/en"
          >École Polytechnique</a
        >
        in Paris, France. Some of my favorite courses this semester are
        Mathematical Models (Seminar), Concurrent and Distributed Computing, and
        Computer Graphics. I'm still undecided on where I'll be pursuing a
        master's next year.

        <br /><br />

        I'm trying to run more regularly, I'm learning Russian on Duolingo, and
        I'm (still) developing this website. I recently took Andrew Lo's online
        course
        <a
          href="https://www.edx.org/course/adaptive-markets-financial-market-dynamics-and-human-behavior"
          >Adaptive Markets: Financial Market Dynamics and Human Behavior</a
        >
        and now I'm very interested in quantitative trading, so much so that I'm
        trying to build a crypto trading bot in my spare time.

        <br /><br />

        Music I've been listening to:
        <ul>
          <li>
            <a href="https://open.spotify.com/artist/41Nu7NgAj9rJxjj7JDuXrV"
              >Peter Cat Recording Co.</a
            >
          </li>
        </ul>

        <br />

        TV shows I've been binging on:

        <ul>
          <li>
            <a href="https://www.imdb.com/title/tt10048342/"
              >The Queen's Gambit</a
            >
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0472954/"
              >It's Always Sunny in Philadelphia</a
            >
          </li>
        </ul>

        <br />

        Books I'm reading or have recently read:

        <ul>
          <li>
            <a href="https://www.goodreads.com/book/show/23692271-sapiens"
              >Sapiens: A Brief History of Humankind by Noah Harari</a
            >
          </li>
          <li>
            <a
              href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow"
              >Thinking, Fast and Slow by Daniel Kahneman</a
            >
          </li>
        </ul>
        <br />

        <p class="update">Last Updated: 13<sup>th</sup> April 2021</p>
      </div>

      <div id="wakatime">
        <img
          class="block"
          src="https://wakatime.com/share/@711c15b0-f043-4685-9869-1182df23fcbb/7a5bc2ba-d2de-4974-96c3-1ce0a1c8e9db.png"
        />
        <img
          class="block"
          src="https://wakatime.com/share/@711c15b0-f043-4685-9869-1182df23fcbb/48015c72-dab0-4c83-b216-991dbf3ee9c2.png"
        />
      </div>

      <div id="cta" class="text block">
        <p>
          I'm always looking for my next opportunity, so feel free to reach out
          if you want to chat or have any questions!
        </p>
        <p>
          <br />
        </p>

        <p>
          <i
            >This page is inspired by
            <a href="https://nownownow.com/">Derek Sivers</a>.</i
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Marquees from "@/components/Marquees.vue";

export default {
  components: {
    Marquees,
  },
};
</script>

<style scoped>
.container {
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 1250px;
}

h1 {
  font-family: "Alata", sans-serif;
  font-weight: 500;
  text-align: center;
}

#header p {
  margin: 5px;
  text-align: center;
  color: grey;
}

#header {
  margin-bottom: 10px;
}

.update {
  color: grey;
}

.text {
  padding: 30px 60px !important;
  text-align: justify;
}

.block {
  display: block;
  padding: 30px;
  margin: 5px;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.7);
}

#cta {
  text-align: center;
  color: lightgray;
}

ul {
  list-style-position: inside;
}

li {
  padding-left: 10px;
}

/* WAKATIME ----------------------------------------------------------------- */

#wakatime {
  display: flex;
  flex-direction: row;
}

#wakatime img {
  width: calc(50% - 10px);
  filter: contrast(3) grayscale(1);
}
</style>
