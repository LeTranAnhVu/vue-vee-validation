import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import showError from './directives/show-error';
import dictionary from './utils/VeeValidateOption';

Vue.config.productionTip = false;


VeeValidate.Validator.localize(dictionary);

Vue.directive('show-error', showError);
Vue.use(VeeValidate, {
  locale: 'vi',
});
new Vue({
  render: h => h(App),
}).$mount('#app');
