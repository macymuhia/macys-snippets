<template>
  <div>
    <!-- <mdb-navbar color="secondary" position="top" dark>
      <mdb-navbar-brand href="https://mdbootstrap.com/">
        <mdb-icon icon="code" />
      </mdb-navbar-brand>

        <div class="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customSwitch1"
            checked
          />
          <label class="custom-control-label" for="customSwitch1">
            Toggle this switch element
            </label>
        </div>
    </mdb-navbar> -->
    <mdb-navbar position="top" dark>
      <mdb-navbar-brand href="#" class="">
        <mdb-row>
          <mdb-col class="mr-3"><div class="icon-align-middle">
            <mdb-icon icon="code"/>
          </div></mdb-col>
          <mdb-col class="snippets">Macy's<br />Snippets</mdb-col>
        </mdb-row>
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav> </mdb-navbar-nav>
        <form>
          <!-- <ToggleSwitch></ToggleSwitch> -->
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
// import ToggleSwitch from "@/components/switches/ToggleSwitch";

export default {
  name: "TopBar",

  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbIcon,
    // ToggleSwitch,
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
  /* background: #ffcd34; */
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
  /* font-weight: 400; */
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}
</style>
