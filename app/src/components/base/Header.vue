<template>
  <div id='header'>
    <div id='main-header'>

      <div id='header-left'>
        <img src='@/assets/logo.png' alt='Joshua Paul Jacob Logo'/>
        <a id='name'>JOSHUA PAUL JACOB</a>
      </div>

      <div id='header-right'>
        <p>MENU</p>
      </div>

    </div>

    <nav>
      <p> ABOUT </p>
      <p> NOW </p>
      <p> PROJECTS </p>
      <p> CONTACT </p>
      <p> HIRE ME </p>
      <p> BLOG </p>
      <p> NOW </p>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

#header {
  overflow: hidden;
  background-color: #000;
  color: white;
}

#main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#header-left {
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

#header-right {
  padding: 10px 20px;
}

img {
    width: 50px;
    margin: 0 10px 0 0;
}

#name {
  font-size: 25px;
  font-weight: bold;
}

/* Navigation */
nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
}

nav p {
  margin: 5px 10px;
}

</style>
