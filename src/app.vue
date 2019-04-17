<template>
  <div>
    <h1 class="red">{{msg}}</h1>
    <button @click="test">Count {{num}}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello worlds!',
      num: 0
    }
  },
  methods: {
    test() {
      this.num++
    }
  }
}
</script>

<style>
  .red {
    color: #f00;
  }
</style>
