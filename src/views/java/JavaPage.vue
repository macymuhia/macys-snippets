<template>
  <div>
    <TopBar></TopBar>
    <div class="btns_grp">
      <router-link :to="{ name: 'JavaPage' }">
        <div class="btns active">
          <mdb-btn block color="#"
            ><mdb-icon fab icon="java" size="2x" class="mr-2" />java</mdb-btn
          >
        </div>
      </router-link>

      <router-link :to="{ name: 'PythonPage' }">
        <div class="btns">
          <mdb-btn block color="#"
            ><mdb-icon
              fab
              icon="python"
              size="2x"
              class="mr-2"
            />python</mdb-btn
          >
        </div>
      </router-link>

      <router-link :to="{ name: 'JavascriptPage' }">
        <div class="btns">
          <mdb-btn block color="#"
            ><mdb-icon
              fab
              icon="js-square"
              size="2x"
              class="mr-2"
            />javascript</mdb-btn
          >
        </div>
      </router-link>
    </div>
    <mdb-container fluid>
      <mdb-row class="no-gutters">
        <mdb-col col="3">
          <div class="side_menu">
            <!-- <mdb-accordion :panes="panes"></mdb-accordion> -->
            <div class="tabs">
              <div class="tab">
                <input type="radio" id="rd1" name="rd" />
                <label class="tab-label" for="rd1">Item 1</label>
                <div class="tab-content">
                  Lorem, ipsum
                </div>
              </div>
              <div class="tab">
                <input type="radio" id="rd2" name="rd" />
                <label class="tab-label" for="rd2">Item 2</label>
                <div class="tab-content">
                  sit amet
                </div>
              </div>
              <div class="tab">
                <input type="radio" id="rd3" name="rd" />
                <label for="rd3" class="tab-close">Close others &times;</label>
              </div>
            </div>
          </div>
        </mdb-col>

        <mdb-col col="9">
          <div class="main_content">JavaPage</div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <Footer></Footer>
  </div>
</template>

<script>
import { mdbBtn, mdbIcon, mdbContainer, mdbRow, mdbCol } from "mdbvue";
import TopBar from "@/components/navigation/TopBar";
import Footer from "@/components/footer/Footer";

export default {
  name: "JavaPage",

  components: {
    mdbBtn,
    mdbIcon,
    TopBar,
    mdbContainer,
    mdbRow,
    mdbCol,
    Footer,
  },

  data() {
    return {
      panes: [
        {
          title: "#Java1",
          content: `Java1`,
        },
        {
          title: "#Java1",
          content: `Java2`,
        },
        {
          title: "#Java1",
          content: `Java3`,
        },
      ],
    };
  },

  computed: {
    isJavaPage() {
      return this.$route.name === "JavaPage";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btns_grp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 312px;
}
.btns {
  width: 185px;
  background-color: none;
  color: whitesmoke;
  border-radius: 5px;
}
.btns:hover {
  background-color: #fdd835;
  color: black;
}
.btns.active {
  width: 185px;
 border-bottom: 2px solid #fdd835;
  color: whitesmoke;
}
.main_content {
  color: white;
}
/* Accordion */
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tabs {
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
}
.tab {
  width: 100%;
  color: black;
  overflow: hidden;
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: #fdd835;
    font-weight: 400;
    cursor: pointer;
    /* Icon */
    &:hover {
      background: #ebc831;
    }
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: black;
    background: whitesmoke;
    transition: all .35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    color: #fdd835;
    background: black;
    cursor: pointer;
    &:hover {
      background: rgb(29, 28, 28);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: #fdd835;
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}
</style>
