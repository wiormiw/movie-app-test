<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Movies</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="movie in movies" :key="movie.id" class="border p-4 rounded">
          <h2 class="text-xl font-semibold">{{ movie.title }}</h2>
          <p>{{ movie.tagline }}</p>
          <p>Rating: {{ movie.vote_average }}/10</p>
          <router-link :to="'/movie/' + movie.id" class="text-blue-500">Details</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieList',
    data() {
      return {
        movies: []
      };
    },
    async created() {
      const response = await fetch('/api/movies');
      this.movies = await response.json();
    }
  };
  </script>
  
  <style scoped>
  </style>