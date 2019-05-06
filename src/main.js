import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import EmojiComponent from './components/emoji/EmojiComponent.vue';
import TestComponent from './components/TestComponent.vue';
import EmojisListComponent from './components/emoji/EmojisListComponent.vue';
import store from './store';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  {name: 'single-emoji', path: '/emoji/:id', component: EmojiComponent},
  {path: '/test', component: TestComponent},
  {path: '/', component: EmojisListComponent}
];

const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
