<template>
  <div id="app">
		<INDEX></INDEX>
		
  </div>
</template>

<script>
import INDEX from './views/index.vue'

export default {
  name: 'app',
  components: {
    INDEX
  },
  created() {
	 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body{
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>
