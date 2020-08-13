<template>
  <div>
    <mdb-navbar color="secondary" position="top" dark>
      <mdb-navbar-brand href="https://mdbootstrap.com/">
        <mdb-icon icon="code" />
      </mdb-navbar-brand>
        <!-- Default checked -->
        <div class="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customSwitch1"
            checked
          />
          <label class="custom-control-label" for="customSwitch1"
            >Toggle this switch element</label
          >
        </div>
    </mdb-navbar>
  </div>
</template>

<script>
export default {
  name: "TopBar",

  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
