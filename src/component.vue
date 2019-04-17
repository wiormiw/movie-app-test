<template>
  <div class="app">
    <div>
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Component",
  data: () => ({
    msg: "Hello from Vue Component"
  })
};
</script>

<style>
</style>