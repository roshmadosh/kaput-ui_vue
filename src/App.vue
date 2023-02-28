<template>
  <Header />
  <main>
    <!-- <Register /> -->
    <Login />
  </main>
</template>

<script>
import Header from './components/Header.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

export default {
  name: 'App',
  components: {
    Header,
    Login,
    Register,
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

.space-block {
    height: 4em;
}

form {
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 6em;
    padding: 3em 5em;
    margin: auto;
    width: fit-content;
}

.form-header {
    margin-bottom: 1.6rem;
}

.form-group {
    margin-bottom: 2rem;
}

.text-group {
    display: flex;
    flex-direction: column;
    width: 32ch;
}

.checkbox-group > label {
    position: relative;
    bottom: 2px;
}

</style>
