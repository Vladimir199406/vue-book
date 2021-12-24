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

    </div>
  </div>
</template>

<script>
import Que1Wrapper from '@/components/questions/Que1/Que1Wrapper.vue'
import Que2Wrapper from '@/components/questions/Que2/Que2Wrapper.vue'
import Que3Wrapper from '@/components/questions/Que3/Que3Wrapper.vue'
import Que4Wrapper from '@/components/questions/Que4/Que4Wrapper.vue'
import Que5Wrapper from '@/components/questions/Que5/Que5Wrapper.vue'
import Que6Wrapper from '@/components/questions/Que6/Que6Wrapper.vue'
import Que7Wrapper from '@/components/questions/Que7/Que7Wrapper.vue'
import Que8Wrapper from '@/components/questions/Que8/Que8Wrapper.vue'
import Que9Wrapper from '@/components/questions/Que9/Que9Wrapper.vue'
import Que10Wrapper from '@/components/questions/Que10/Que10Wrapper.vue'
import Que11Wrapper from '@/components/questions/Que11/Que11Wrapper.vue'
import Que12Wrapper from '@/components/questions/Que12/Que12Wrapper.vue'
import Que13Wrapper from '@/components/questions/Que13/Que13Wrapper.vue'
import Que14Wrapper from '@/components/questions/Que14/Que14Wrapper.vue'

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .main-wrapper{

    &__blocks-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      //flex-direction: row;
      flex-direction: column;
      align-items: center;

      .block {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        padding: 20px;
        min-height:fit-content;
        min-width:300px;
        max-width: 800px;
        margin: 30px;
        border: 2px solid #42b983;
        border-radius: 10px;

        &__solution {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding: 20px;
          border: 2px solid brown;
          margin-top: 20px;
          border-radius: 10px;
        }

      }

    }

  }

</style>
