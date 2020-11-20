<template>
  <div>
    <vue-headful
      title="Now - Joshua Paul Jacob"
      description="Joshua Paul Jacob's Now Page"
    />

    <marquees text="NOW" :duration="3" />

    <h1 class="block">What am I doing now?</h1>

    <p class="block">
      This is my now page, inspired by <a href="https://nownownow.com/about">Derek Sievers</a>. I periodically
      update it with what is currently going on in my life.

      I'm in Paris, France.

      I run.
      
      Studying for the GRE
      I'm trying to keep it together during this pandemic. Lost UofT.

      I'm a final-year penultimate semester student working towards a bachelor's
      degree in mathematics and computer science at
      <a>École Polytechnique</a> in Paris, France.

      My favorite courses this semester are Compilers,  Stochastic Processes, Asymptotic Statistics, Measure and Integration.

      Volunteering for a charity.
      
      // Courses I'm taking rn? //

      I'm looking for opportunities for summer 2019 that would bridge the gap
      between my academics and professional world industries. //
      
      Freelance
      design

      Goals I'm currently working on.

      I'm learning Arabic on Duolingo.

      What music am listening to?

      I'm preparing applications for graduate school.

      I'm (still) developing this website.
      
      // Projects I'm working on rn.

      I’m starting to explore open-soure software.

      I just recently The Crown on Netflix.

      COntributing to CLUE

      (Running, wakatime, last 3 books read: kurt vonnegut slaughterhouse V,
      shit you should check out, etc.) Books I've recently read: Kurt Vonnegut's
      Slaughterhouse V Munroe Randall's How To: Absurd Scientific Advice for
      Common Real-World Problems Yuval Noah Harari's Sapiens: A Brief History of
      Humankind Checkout my Goodreads page. vue-dynamic-marquee
    </p>

    <p class="block">Last Updated: 17<sup>th</sup> November 2020</p>

    <div id="wakatime">
      <img class="block"
        src="https://wakatime.com/share/@711c15b0-f043-4685-9869-1182df23fcbb/7a5bc2ba-d2de-4974-96c3-1ce0a1c8e9db.png"
      />
      <img class="block"
        src="https://wakatime.com/share/@711c15b0-f043-4685-9869-1182df23fcbb/48015c72-dab0-4c83-b216-991dbf3ee9c2.png"
      />
    </div>

    <embed class=block src="https://spotify-github-profile.vercel.app/api/view?uid=joshuapjacob&cover_image=true&theme=novatorem" type="text/html">

    <p>This page is inspired by Derek Sivers</p>

    <div id="cta">I'm always looking for my next opportunity, so feel free to reach out to me if you want to chat or have any questions!</div>
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

h1 {
  font-family: "Alata", sans-serif;
}

.block {
  padding: 20px;
  margin: 10px;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.6);
}

/* WAKATIME ----------------------------------------------------------------- */

#wakatime {
  display: flex;
  flex-direction: row;
}

#wakatime img {
  width: calc(50% - 20px);
  filter: contrast(3) grayscale(1);
}
</style>
