<template>
  <form class="custom-form" action="" @submit.prevent="onSubmit">
    <label for="currency">Tien gui tiet kiem</label>
    <input
      autocomplete="off"
      id="currency"
      type="text"
      @input="onchangeCurrency"
      :value="currency"
      name="tien gui tiet kiem"
      v-validate="'required|atleast:10000000'"
      v-show-error="runChecked && errors.first('tien gui tiet kiem')"
    />
    <input type="submit" value="submit"/>
  </form>
</template>

<script>
  import currencyFormat from '../utils/currencyFormat';

  export default {
    name: 'CustomForm',
    data() {
      return {
        formatedCurrency: '',
        runChecked: false,
      };
    },
    computed: {
      currency: {
        get() {
          return this.formatedCurrency;
        },
        set(value) {
          const v = value.toString().trim().split(',').join('');
          console.log('set', v);
          this.formatedCurrency = currencyFormat(v, ',');
        },
      },
    },
    mounted() {
      this.$validator.extend('atleast', {
        validate(value, args) {
          const v = Number(value.toString().split(',').join(''));
          console.log('v', Number.isNaN(v));
          const limit = Number(args[0]);
          if (!Number.isNaN(v) && v >= limit) return true;
          return false;
        },
        getMessage(field, args) {
          return `phan ${field} phai it nhat ${currencyFormat(args[0], ',')}vnd`;
        },
      });
    },
    methods: {
      onchangeCurrency(e) {
        this.currency = e.target.value;
      },
      onSubmit() {
        console.log('submited');
        this.$validator.validate()
          .then((result) => {
            console.log('result', result);
            this.runChecked = true;
          });
      },
    },
    filters: {
      currencyFilter(value) {
        return currencyFormat(value);
      },
    },
  };
</script>

<style scoped>
  .custom-form{
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: flex-start;
  }
</style>
