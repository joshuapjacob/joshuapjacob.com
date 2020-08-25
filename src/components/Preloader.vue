<template>
  <transition name="fade">
    <div v-if="show" id="preloader">
      <img src="@/assets/logo.png" alt="Joshua Paul Jacob Logo" />
      <p class="chrome">Loading...</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "preloader",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.toggle();
  },
  methods: {
    toggle() {
      setTimeout(() => {
        this.show = !this.show;
      }, 2000);
    },
  },
};
</script>

<style scoped>
#preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: black;
}

img {
  width: 100px;
}

p {
  margin-top: 1rem;
  font-family: "Lato", sans-serif;
  color: gray;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-active img,
.fade-leave-active img {
  animation: scaleOut 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* https://codepen.io/fazlurr/pen/qbWMRv */
.chrome {
  background: #222 -webkit-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    ) 0 0 no-repeat;
  background-image: -webkit-linear-gradient(
    -40deg,
    transparent 0%,
    transparent 40%,
    #e0e0e0 50%,
    transparent 60%,
    transparent 100%
  );
  background-size: 200px;
  color: rgba(255, 255, 255, 0.3);
  background-clip: text;
  animation-name: shine;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  text-shadow: 0 0px 0px rgba(255, 255, 255, 0.5);
}

@keyframes shine {
  0% {
    background-position: -100px;
  }
  100% {
    background-position: 100px;
  }
}

@keyframes scaleOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.75);
  }
}
</style>
