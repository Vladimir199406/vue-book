<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Основные положения</router-link> |
      <router-link to="/about">Описание</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
h3 {
  text-align: center;
}

p {
  //text-indent: 1.5em;
  line-height: 2em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: lightgray;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
