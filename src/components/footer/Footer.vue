<template>
  <!-- Footer -->
  <div >
      
      <mdb-footer color="black" class="font-small pt-2 static-bottom">
          <hr class="footer-hr">
        <mdb-container fluid>
          <mdb-row>
            <mdb-col md="12">
              <div class="my-5 flex-center">
                <a class="fb-ic"><i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                <a class="tw-ic"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                <a class="gplus-ic"><i class="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                <a class="li-ic"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                <a class="ins-ic"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
                <a class="pin-ic"><i class="fab fa-pinterest fa-lg white-text fa-2x"> </i></a>
              </div>
            </mdb-col>
          </mdb-row>
        </mdb-container>
        <hr class="footer-hr">
        <div class="footer-copyright text-center py-4">
          <mdb-container fluid>
            &copy; 2020 Copyright: <a href="#"> Macy's Snippets</a>
          </mdb-container>
        </div>
      </mdb-footer>
  </div>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer } from 'mdbvue';

export default {
  name: 'Footer',

  components: {
      mdbFooter,
      mdbContainer,
  },

  data () {
    return {
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr.footer-hr {
    border: 1px solid #fdd83591;
}
</style>