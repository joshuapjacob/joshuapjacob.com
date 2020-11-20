<template>
  <div>
    <vue-headful
      title="Projects - Joshua Paul Jacob"
      description="Joshua Paul Jacob's Projects"
    />
    <marquees text="PROJECTS" :duration="8" />
    <h1>Projects</h1>
    <p></p>
    <ul>
      <li>X-IT</li>
      <li>Drug Money</li>
      <li>Feedback</li>
      <li>joshuapjacob.com</li>
    </ul>
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
