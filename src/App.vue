<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/mytarifs">MyTarif</router-link>
  </nav>
  <router-view/>
  <div id="message" class="hidden-xs"></div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    methods: {
      ...mapActions([
          'GET_TARIFS_FROM_API',
      ]),
    },
    mounted() {
      this.GET_TARIFS_FROM_API()
    }
  };
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#message {
    padding: 20px;
    position: fixed;
    top: 40vh;
    right: 10vh;
    background: #0a69d4;
    z-index: 100;
    color: #fff;
    visibility: visible;
    opacity: 1;
    transition: all 0.3s ease;
    border-radius: 5px;
    font-size: 16px;

    &.hidden-xs {
      visibility: hidden;
      opacity: 0;
    }
}
</style>
