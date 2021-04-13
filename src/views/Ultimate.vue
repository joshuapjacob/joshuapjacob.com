<template>
  <div>
    <vue-headful
      title="Ultimate - Joshua Paul Jacob"
      description="Joshua Paul Jacob's Ultimate List"
    />
    <marquees text="ULTIMATE" :duration="8" />

    <h1>The Ultimate List</h1>
    <p>Inspired by Joel Runyon & Thomas Frank</p>
    <p>This page was last updated on [DATE HERE].</p>
    <a href="https://impossiblehq.com/the-impossible-list-is-not-a-bucket-list/"
      >This is not a bucket list.</a
    >
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
