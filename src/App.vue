<template>
  <div id="app">
    <h3>build-in form</h3>
    <vee-form></vee-form>
    <hr>
    <h3>custom form</h3>
    <custom-form></custom-form>
  </div>
</template>

<script>
  // import Form from './components/Form.vue';
  import VeeForm from './components/VeeForm.vue';
  import CustomForm from './components/CustomForm.vue';

  export default {
    name: 'app',
    components: {
      VeeForm,
      CustomForm,
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
