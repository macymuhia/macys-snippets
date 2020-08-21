<template>
      <div class="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customSwitch1"
            checked
          />
          <label class="custom-control-label" for="customSwitch1">
            </label>
        </div>
</template>

<script>
export default {
  name: 'ToggleSwitch',

  data () {
    return {
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-switch .custom-control-input:checked~.custom-control-label::after {
  background: yellow;
}
.custom-switch .custom-control-input:checked~.custom-control-label::before {
  background: red;
}
.custom-switch .custom-control-label::after {
  background: blueviolet;
}
.custom-switch .custom-control-label::before {
  background: green;
}
</style>
