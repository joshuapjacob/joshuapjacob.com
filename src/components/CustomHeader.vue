<template>
  <header>
    <!-- <div class="top left">
      <img src="@/assets/logo.png" alt="Joshua Paul Jacob Logo" />
    </div>
    <div class="top right">
      <p>HIRE ME</p>
    </div>
    <div class="bottom left">
      <a href="">Instagram</a>
      <a href="">LinkedIn</a>
      <a href="">GitHub</a>
    </div>
    <div class="bottom right">
      <a href="mailto:contact@joshuapjacob.com?subject=Hello" target="_blank">contact@joshuapjacob.com</a>
    </div> -->
  </header>
</template>

<script>
export default {
  name: "customHeader",
};
</script>

<style scoped>
header > * {
  position: fixed;
}

.top {
  top: 5%;
}

.bottom {
  bottom: 5%;
}

.left {
  left: 5%;
}

.right {
  right: 5%;
}

img {
  width: 50px;
}
</style>
