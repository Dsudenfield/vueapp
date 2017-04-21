import Vue from 'vue'
import App from './App.vue'
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);

Vue.component('slider', {
    template: '#slider-template',
    props: ['slider']
});

new Vue({
  el: '#app',
  render: h => h(App)
})
