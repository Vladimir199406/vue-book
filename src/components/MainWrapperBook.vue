<template>
  <div class="main-wrapper">
    <div class="main-wrapper__blocks-wrapper">

      <div id="que-1" class="block">
        <h3>
          Вопрос1: Что такое двустороннее связывание?
        </h3>
        <p>
          Двустороннее связывание - это связь UI элемента с данными. 
          При изменении на одном конце "связки" происходят изменеия на другом.
        </p>
      </div>


      <div id="que-2" class="block">
        <h3>Вопрос2: Какими способами можно реализовать двустороннее связывание для input?</h3>

        <div class="block__solution">
          <input 
            :bind="que2Solution1Email"
            @input="que2Solution1Email = $event.target.value"
            :value="que2Solution1Email"
            type="text"
          >
          <p>
            Здесь значение модели 1, которая в будущем изменяется: 
            <span>{{que2Solution1Email}}</span>
          </p>
        </div>

        <div class="block__solution">
          <input 
            v-model="que2Solution2Email"
            type="text"
          >
          <p>
            Здесь значение модели 2, которая в будущем изменяется: 
            <span>{{que2Solution2Email}}</span>
          </p>
        </div>

      </div>


      <div class="block">lallala</div>


      <div class="block">lallala</div>


      <div class="block">lallala</div>


      <div class="block">lallala</div>


      <div class="block">lallala</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MainWrapperBook',
  data(){
    return {
      que2Solution1Email: 'модель 1',
      que2Solution2Email: 'модель 2'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .main-wrapper{

    h3 {
      margin: 40px 0 0;
    }

    a {
      color: #42b983;
    }

    span {
      color: #42b983;
    }

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

          input {
            height: fit-content;
            border-radius:5px;
            padding: 5px;
          }
        }

      }

    }

  }

</style>
