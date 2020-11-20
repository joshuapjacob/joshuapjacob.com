<template>
  <main>
    <vue-headful
      title="Joshua Paul Jacob // CV"
      description="Joshua Paul Jacob's CV"
    />

    <marquees text="CURRICULUM VITAE" :duration="16" />
    <!-- TODO: LINK TO PDF -->
    <div id="CV">
      <header>
        <h1>Joshua Paul Jacob</h1>
        <div id="info">
          <span id="phone-number">+33 6 45 07 44 02</span>
          <span id="email">contact@joshuapjacob.com</span>
          <span id="location">Paris, France</span>
          <!-- Born 3rd February -->
        </div>
      </header>
      <div id="summary">
        <p>I'm currently looking for summer internships.</p>
        <!-- <img src="" alt="Joshua Paul Jacob" /> -->
      </div>
      <div id="education">
        <h2>{{ $t("cv.education.title") }}</h2>
        <div class="item">
          <div class="primary">
            <h3>École Polytechnique</h3>
            <h4>Bachelor of Science in Mathematics & Computer Science</h4>
          </div>
          <div class="secondary">
            <h3>Palaiseau, France</h3>
            <h4>Sep 2018 – Jun 2021</h4>
          </div>
        </div>
        <div class="details"></div>
        <div class="item">
          <div class="primary">
            <h3>École Internationale Bilingue – Victor Hugo</h3>
            <h4>
              International Baccalaureate Diploma, Cambridge Extended IGCSEs
            </h4>
          </div>
          <div class="secondary">
            <h3>Paris, France</h3>
            <h4>Sep 2014 – Jun 2018</h4>
          </div>
        </div>
        <div class="details"></div>
        <div class="item more">
          <div class="primary">
            <h3>Ryan Global School</h3>
            <h4>Cambridge Lower Secondary Checkpoint</h4>
          </div>
          <div class="secondary">
            <h3>Bangalore, India</h3>
            <h4>Sep 2011 – Jun 2014</h4>
          </div>
        </div>
        <div class="details"></div>
      </div>
      <div id="experience">
        <h2>{{ $t("cv.experience.title") }}</h2>
        <div class="item">
          <div class="primary">
            <h3>
              Centre de Mathématiques Appliquées – École Polytechnique (CMAP)
            </h3>
            <h4>Financial Mathematics Research Intern</h4>
          </div>
          <div class="secondary">
            <h3>Palaiseau, France</h3>
            <h4>Jan 2021 – Mar 2021</h4>
          </div>
        </div>
        <div class="details"></div>
        <div class="item">
          <div class="primary">
            <h3>L'Oréal</h3>
            <h4>Summer Intern – Web Development</h4>
          </div>
          <div class="secondary">
            <h3>Clichy, France</h3>
            <h4>Jun 2019 – Aug 2019</h4>
          </div>
        </div>
        <div class="details"></div>
        <div class="item">
          <div class="primary">
            <h3>Freelance Graphic Design & Video Production</h3>
            <h4>Bachelor of Science in Mathematics & Computer Science</h4>
          </div>
          <div class="secondary">
            <h3>Remote</h3>
            <h4>May 2015 – Present</h4>
          </div>
        </div>
        <div class="details"></div>
      </div>
      <div id="volunteering">
        <h2>{{ $t("cv.volunteering.title") }}</h2>
      </div>
      <div id="achievements-and-awards">
        <h2>{{ $t("cv.achievements-and-awards.title") }}</h2>
      </div>
      <div id="key-skills">
        <h2>{{ $t("cv.key-skills.title") }}</h2>
      </div>
      <div id="languages">
        <h2>{{ $t("cv.languages.title") }}</h2>
      </div>
      <div id="technology">
        <h2>{{ $t("cv.technology.title") }}</h2>
      </div>
      <div id="interests">
        <h2>{{ $t("cv.interests.title") }}</h2>
      </div>
    </div>
  </main>
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
main {
  display: flex;
  justify-content: center;
}

#CV {
  margin: 50px;
  padding: 10px;
  width: 100%;
  max-width: 1024px;
  font-family: "Roboto Mono", monospace;
  background-color: rgba(0, 0, 0, 0.8);
}

#CV div {
  margin: 10px;
}

.item.more {
  display: none;
}

/* HEADER ------------------------------------------------------------------- */

#info {
  display: flex;
  justify-content: space-between;
}

.item {
  display: flex;
  justify-content: space-between;
}

.primary {
  margin-right: 20px;
}

.secondary {
  text-align: right;
}

h1 {
  text-align: center;
}
</style>
