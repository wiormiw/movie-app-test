import Vue from 'vue';
import VueRouter from 'vue-router';
import MovieList from '../components/MovieList.vue';
import MovieDetail from '../components/MovieDetail.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: MovieList },
  { path: '/movie/:id', component: MovieDetail }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;