<template>
    <div class="container mx-auto p-4">
      <router-link to="/" class="text-blue-500 mb-4 inline-block">← Back to List</router-link>
      <div v-if="movie" class="border p-4 rounded">
        <h1 class="text-2xl font-bold">{{ movie.title }}</h1>
        <p><strong>Original Title:</strong> {{ movie.original_title }}</p>
        <p><strong>Overview:</strong> {{ movie.overview }}</p>
        <p><strong>Release Date:</strong> {{ new Date(movie.release_date).toLocaleDateString() }}</p>
        <p><strong>Runtime:</strong> {{ movie.runtime }} minutes</p>
        <p><strong>Status:</strong> {{ movie.status }}</p>
        <p><strong>Tagline:</strong> {{ movie.tagline }}</p>
        <p><strong>Rating:</strong> {{ movie.vote_average }}/10</p>
        <p><strong>Votes:</strong> {{ movie.vote_count }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieDetail',
    data() {
      return {
        movie: null
      };
    },
    async created() {
      const response = await fetch(`/api/movies/${this.$route.params.id}`);
      this.movie = await response.json();
    }
  };
  </script>
  
  <style scoped>
  </style>