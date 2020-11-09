<template>
  <main>
    <vue-headful
      title="Joshua Paul Jacob // CV"
      description="Joshua Paul Jacob's CV"
    />
    <decorations />
    <customMenu />
    <!-- LINK TO PDF -->
    <div id="CV">
      <header>
        <h1>Joshua Paul Jacob</h1>
        <div id="info">
          <span id="phone-number">+33 6 45 07 44 02</span>
          <span id="email">contact@joshuapjacob.com</span>
        </div>
      </header>
      <div id="summary">
        <p></p>
        <img src="" alt="Joshua Paul Jacob" />
      </div>
      <div id="education">
        <h2>{{ $t("cv.education.title") }}</h2>
      </div>
      <div id="experience">
        <h2>{{ $t("cv.experience.title") }}</h2>
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
