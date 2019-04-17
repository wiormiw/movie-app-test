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
  font-family: 'Helvetica', 'Arial', sans-serif;
}
</style>