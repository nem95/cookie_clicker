<template>
  <div id="app">
    
    <h1>Cookie Clicker</h1>
    <BuildingShop />
    <Cookie />
  </div>
</template>

<script>
import Cookie from './components/Cookie.vue';
import BuildingShop from './components/BuildingShop.vue';

export default {
  name: 'app',
  components: {
    Cookie,
    BuildingShop
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  user-select: none;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
