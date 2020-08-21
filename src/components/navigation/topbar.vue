<template>
  <div>
    <mdb-navbar position="top" dark>
      <mdb-navbar-brand href="" class="">
        <router-link :to="{ name: 'LandingPage' }">
        <mdb-row>
          
          
            <mdb-col class="mr-3"><div class="icon-align-middle"><mdb-icon icon="code" /></div></mdb-col>
            <mdb-col class="snippets">Macy's<br />Snippets</mdb-col>
          
        </mdb-row>
        </router-link>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav> </mdb-navbar-nav>
        <form>
        </form>
      </mdb-navbar-toggler>
    </mdb-navbar>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbIcon,
  mdbRow,
  mdbCol,
} from "mdbvue";

export default {
  name: "TopBar",

  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbIcon,
    mdbRow,
    mdbCol,
  },

  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav.navbar.navbar-dark.navbar-expand-lg.fixed-top {
  padding: 1% 15%;
  background: #fdd835;
}
.icon-align-middle {
  font-size: 2em;
  color: black;
  margin-bottom: 10px;
}
.snippets {
  color: black;
  font-size: 24px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
</style>
