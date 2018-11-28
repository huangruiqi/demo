<template>
  <div class="hello">
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
}
.hello > div {
  width: 50%;
  height: 50%;
  background-color: yellow;
  border-radius: 20%;
}
</style>
