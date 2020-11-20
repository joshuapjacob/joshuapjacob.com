<template>
  <div>
    <div class="marquee-container" id="marquee-left">
      <marquee-text :repeat="100" :duration="duration">
        <span>{{ text }}</span>
      </marquee-text>
    </div>

    <div class="marquee-container" id="marquee-right">
      <marquee-text :repeat="100" :duration="duration">
        <span>{{ text }}</span>
      </marquee-text>
    </div>
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";

export default {
  props: ["text", "duration"],
  components: {
    MarqueeText,
  },
};
</script>

<style>
.marquee-container {
  width: 100vh;
  position: fixed;
  top: 50%;
  opacity: 0.25;
}

#marquee-right {
  transform: translate(-50%, -50%) rotate(90deg);
  right: calc(-100vh + 9vw);
}

#marquee-left {
  transform: translate(-50%, -50%) rotate(270deg);
  left: 9vw;
}

.marquee-container span {
  margin-right: 10px;
  font-family: "Roboto Mono", monospace;
  user-select: none;
  cursor: default;
}
</style>
