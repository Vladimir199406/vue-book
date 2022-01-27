<template>
  <div class="main-wrapper">
    <div class="main-wrapper__blocks-wrapper">

      <Que1Wrapper/>
      <Que2Wrapper/>
      <Que3Wrapper/>
      <Que4Wrapper/>
      <Que5Wrapper/>
      <Que6Wrapper/>
      <Que7Wrapper/>
      <Que8Wrapper/>
      <Que9Wrapper/>
      <Que10Wrapper/>
      <Que11Wrapper/>
      <Que12Wrapper/>
      <Que13Wrapper/>
      <Que14Wrapper/>
      <Que15Wrapper/>
      <Que16Wrapper/>
      <Que17Wrapper/>
      <Que18Wrapper/>

    </div>
  </div>
</template>

<script>
import Que1Wrapper from '@/components/questions/Que1-bind/Que1Wrapper.vue'
import Que2Wrapper from '@/components/questions/Que2-ways-to-bind/Que2Wrapper.vue'
import Que3Wrapper from '@/components/questions/Que3-props/Que3Wrapper.vue'
import Que4Wrapper from '@/components/questions/Que4-reactive/Que4Wrapper.vue'
import Que5Wrapper from '@/components/questions/Que5-composition-API/Que5Wrapper.vue'
import Que6Wrapper from '@/components/questions/Que6-vmodel-vue2-vue3/Que6Wrapper.vue'
import Que7Wrapper from '@/components/questions/Que7-emit/Que7Wrapper.vue'
import Que8Wrapper from '@/components/questions/Que8-vue-router/Que8Wrapper.vue'
import Que9Wrapper from '@/components/questions/Que9-computed/Que9Wrapper.vue'
import Que10Wrapper from '@/components/questions/Que10-watch/Que10Wrapper.vue'
import Que11Wrapper from '@/components/questions/Que11-watch-deep/Que11Wrapper.vue'
import Que12Wrapper from '@/components/questions/Que12-interpolation/Que12Wrapper.vue'
import Que13Wrapper from '@/components/questions/Que13-conditional-rendering/Que13Wrapper.vue'
import Que14Wrapper from '@/components/questions/Que14-v-if-v-show-difference/Que14Wrapper.vue'
import Que15Wrapper from '@/components/questions/Que15-mixin/Que15Wrapper.vue'
import Que16Wrapper from '@/components/questions/Que16-directives/Que16Wrapper.vue'
import Que17Wrapper from '@/components/questions/Que17-vuex/Que17Wrapper.vue'
import Que18Wrapper from '@/components/questions/Que18-object-field-watch/Que18Wrapper.vue'


export default {
  name: 'MainWrapperBook',
  data(){
    return {
      que2Solution1Email: 'модель 1',
      que2Solution2Email: 'модель 2'
    }
  },
  components: {
    Que1Wrapper,
    Que2Wrapper,
    Que3Wrapper,
    Que4Wrapper,
    Que5Wrapper,
    Que6Wrapper,
    Que7Wrapper,
    Que8Wrapper,
    Que9Wrapper,
    Que10Wrapper,
    Que11Wrapper,
    Que12Wrapper,
    Que13Wrapper,
    Que14Wrapper,
    Que15Wrapper,
    Que16Wrapper,
    Que17Wrapper,
    Que18Wrapper,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
