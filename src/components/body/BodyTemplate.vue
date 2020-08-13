<template>
  <mdb-container fluid>
    <mdb-row class="no-gutters">
      <mdb-col col="3">
        <div class="side_menu">
            <ul>
                <li>Javascript</li>
                <li>Java</li>
                <li>python</li>
            </ul>
        </div>
      </mdb-col>

      <mdb-col col="9">
        <div class="main_content">col</div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";

export default {
  name: "BodyTemplate",

  components: {
    mdbContainer,
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
.side_menu,
.main_content {
  border: 1px solid red;
  height: 100vh;
}
.side_menu {
    border-right: 1px solid #fdd83591;
}
.wave{
  width: 314px;
  height: 100vh;
  border: 1px solid black;
  background-image: radial-gradient(circle, #fdd835, #fdd835 25px, black 10px, black);
  background-size: 630px 50px;
}
</style>
