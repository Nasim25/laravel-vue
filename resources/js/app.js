
require('./bootstrap');
window.Vue = require('vue');
// vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
});
