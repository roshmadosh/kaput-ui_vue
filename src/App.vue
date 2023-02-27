<template>
  <Header />
  <main>
    <Login />
  </main>
</template>

<script>
import Header from './components/Header.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Header,
    Login,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.page {
  width: var(--page-width);
  margin: auto;
  padding: 3em;
}

</style>
