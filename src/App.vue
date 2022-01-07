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
    margin: 40px 0 0;
  }

  h4 {
    text-align: center;
    margin: 20px 0 0;
  }

  p {
    //text-indent: 1.5em;
    line-height: 2em;
  }

  a {
    color: #42b983;
  }

  ul > h4 {
    margin-bottom: 30px;
  }

  li {
    margin: 0 0 20px 30px
  }

  span {
    color: #42b983;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lavender;
    border: 1px solid #42b983;
    border-radius: 5px;
    cursor: pointer;
    margin: 1.5em;
    min-height: 50px;
    font-weight: 600;
    width: fit-content;
  }

  input {
    min-height: 35px;
    border-radius:5px;
    padding: 5px;
    margin: 20px;
    background-color: lightgrey;
  }

  pre {
    display: inline;
    line-height: 10px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
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
