<template>
  <!-- Footer -->
  <div>
    <mdb-footer color="black" class="font-small pt-2 static-bottom">
      <hr class="footer-hr" />
      <mdb-container fluid>
        <mdb-row>
          <mdb-col md="12">
            <div class="my-3 flex-center">
              <a href="https://github.com/macymuhia" target="_blank">
              <i class="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x">
              </i>
              </a>
              <a href="https://twitter.com/macymuhia" target="_blank">
              <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
              </i>
                </a>
              <a href="https://www.linkedin.com/in/mercy-muhia-015343b7/" target="_blank">
              <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
              </i>
              </a>
              <a href="https://www.facebook.com/n.muthomis/" target="_blank">
              <i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x">
              </i>
                </a>
              
              <a href="https://www.instagram.com/macy.muhia/" target="_blank">
              <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
              </i>
                </a>
              
            </div>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <hr class="footer-hr" />
      <div class="footer-copyright text-center py-4">
        <mdb-container fluid>
          &copy; 2020 Copyright: <a href="/"> <span>Macy's Snippets</span></a>
        </mdb-container>
      </div>
    </mdb-footer>
  </div>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";

export default {
  name: "Footer",

  components: {
    mdbFooter,
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
hr.footer-hr {
  border: 1px solid #fdd83591;
}
span {
  color: #fdd835;
}
</style>
