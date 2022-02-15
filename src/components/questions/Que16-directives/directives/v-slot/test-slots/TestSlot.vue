<template>
  <div class="test-slot">
      <div>
        <slot></slot>
      </div>
  </div>
</template>

<script>

export default {
  name: 'TestSlot',
  data(){
    return {}
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .test-slot {
      max-width: inherit;
    }
</style>
