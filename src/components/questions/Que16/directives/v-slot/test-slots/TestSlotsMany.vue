<template>
  <div class="test-slot">
        <div class="test-slot__header">
            <slot name="header"></slot>
        </div>
        <div class="test-slot__body">
            <slot name="body"></slot>
        </div>
        <div class="test-slot__footer">
            <slot name="footer"></slot>
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

        .test-slot__header {
            color: cadetblue;
        }

        .test-slot__body {
            color: cornflowerblue;
        }

        .test-slot__footer {
            color: darkgoldenrod;
        }
    }
</style>
