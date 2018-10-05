import Vue from 'vue'
import App from './App.vue'
import MainContainer from './components/MainContainer.vue';
import VueMarkdown from 'vue-markdown';

Vue.component('Main-Container', MainContainer);

new Vue({
  el: '#app',
  components:{
    VueMarkdown
  },
  render: h => h(App)
})
