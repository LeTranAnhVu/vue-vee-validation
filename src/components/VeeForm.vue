<template>
  <form class="form" @submit.prevent="log">
    <div class="form-item">
      <label for="email">Email: </label>
      <input id="email" v-validate="'required|email'" type="text" name="email"
             v-show-error="runChecked && errors.first('email')">
    </div>

    <div class="form-item">
      <label for="password">Password: </label>
      <input id="password" v-validate="'required'" type="password" name="password"
             v-show-error="runChecked && errors.first('password')">
      <small>Your information will not be exposed.</small>
    </div>

    <div class="form-item">
      <input type="submit" value="submit">
    </div>
  </form>
</template>

<script>
  export default {
    name: 'VeeForm',
    data() {
      return {
        runChecked: false,
      };
    },
    methods: {
      log() {
        this.$validator.validate().then((result) => {
            this.runChecked = true;
        });
      },
    },
  };
</script>

<style scoped>
  .form {
    width: 300px;
  }

  .form-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  }

</style>
