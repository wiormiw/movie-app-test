<template>
  <div class="app">
    <div>
      <h1>{{msg}}</h1>
    </div>
    <component/>
  </div>
</template>

<script>
import Component from "./component.vue";

export default {
  name: "App",
	data: () => ({
    msg: 'Hello from Vue App'
  }),
  components: {
    Component
  },
}
</script>

<style>
.app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*   margin-top: 60px; */
}
</style>