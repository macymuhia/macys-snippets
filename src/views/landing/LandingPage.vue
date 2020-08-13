<template>
  <div>
    <TopBar></TopBar>
    <BodyTemplate></BodyTemplate>
    <Footer></Footer>
  </div>
</template>

<script>
import TopBar from '@/components/navigation/TopBar';
import BodyTemplate from '@/components/body/BodyTemplate';
import Footer from '@/components/footer/Footer';

export default {
  name: "LandingPage",

  components: {
      TopBar,
      BodyTemplate,
      Footer
  },

  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
