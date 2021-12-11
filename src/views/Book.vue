<template>
  <div class="book">
    <div class="book__header">
      <img class="logo" alt="Vue logo" src="../assets/logo.png">
      <h1>{{ msg }}</h1>
    </div>
    <MainWrapperBook/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainWrapperBook from '@/components/MainWrapperBook.vue'

export default {
  name: 'Book',
  data() {
    return {
      msg: "Vue 2 book manual"
    }
  },
  components: {
    MainWrapperBook
  }
}
</script>

<style lang="scss" scoped>
  .book {
    &__header{
      display: flex;
      justify-content: row;
      justify-content: center;
      align-items: center;
      .logo {
        height: 100px !important;
      }
    }
  }
</style>
