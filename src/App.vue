<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$image-path: '~@/../mdb/mdbvue/img';
@import '~@/../mdb/mdbvue/scss/mdb-free.scss';

@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  text-align: center;
  margin-top: 150px;
}
html, body {
  background: black;
  // border: 1px solid red;
  height: 100vh;
}
body {
  background: black;
  padding: 1% 15%;
  // border: 1px groove red;
  // border-style: groove;
  height: 100vh;
}
.col, .row, .navbar-brand, .footer, .container, .container-fluid {
    margin: 0px;
    padding: 0px;
}
</style>
