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

  body {
    background: -webkit-linear-gradient(90deg, #edefee,#c9c9c9);
    background: linear-gradient(90deg, #edefee,#c9c9c9);
  }

  h3 {
    font-weight: 500;
    font-style: normal;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    margin: 40px 0 0;
  }

  h4 {
    font-weight: 500;
    font-style: normal;
    font-size: 22px;
    line-height: 20px;
    text-align: center;
    text-align: center;
    margin: 20px 0 0;
  }

  p {
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 18px;
    padding: 0px 30px;
  }

  a {
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    line-height: 18px;
    color: #42b983;
  }

  ul {
    padding: 0px 30px;
  }

  ul > h4 {
    margin-bottom: 30px;
    padding-left: 0px;
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
    border: 2px solid #42b983;
    border-radius: 5px;
    cursor: pointer;
    margin: 1.5em;
    padding: 20px;
    min-height: 50px;
    font-weight: 600;
    width: fit-content;
    font-weight: 600;
    font-style: normal;
    font-size: 20px;
    line-height: 20px;
  }

  button:hover {
    background-color: #5495f1;
    color: white;
    border: solid #5495f1;
  }

  input {
    min-height: 35px;
    border-radius:5px;
    padding: 5px;
    margin: 20px;
    background-color: lavender;
    font-weight: 600;
    padding: 10px;
  }

  pre {
    display: none;
  }

  #app {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

  .main-wrapper{
    width: 100%;

    &__blocks-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .block {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 20px;
        min-height:fit-content;
        width: 70%;
        margin: 30px;
        border: 2px solid #42b983;
        border-radius: 10px;

        &__solution {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 20px;
          border: 2px solid rgb(38, 189, 181);
          margin-top: 20px;
          border-radius: 10px;

          &--error {
            color: brown;
            text-shadow: rosybrown;
          }
        }
      }
    }
  }

  .test-slot {
    max-width: 200px;
  }

  @media screen and (min-width: 768px) {

    p {
      padding: 0px;
    }

    ul {
      padding: 0px;
    }

    .main-wrapper{
      .block {
        border: 5px solid #42b983;

        &__solution {
          border: 3px solid rgb(38, 189, 181);
        }
      }
    }

    .test-slot {
      max-width: unset;
    }
  }

  @media screen and (min-width: 1280px) {
    pre {
      display: unset;
      white-space: pre-wrap;
      line-height: 20px;
      font-size: 14px;
      font-weight: 500;
    }
    .main-wrapper{
      .block {
        border: 10px solid #42b983;

        &__solution {
          border: 5px solid rgb(38, 189, 181);
        }
      }
    }
  }
</style>
