<template>
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
</template>

<script>
    export default {
        name: 'Que2Wrapper',
        data(){
            return {
                que2Solution1Email: 'модель 1',
                que2Solution2Email: 'модель 2'
            }
        },
        components: {}
    }
</script>

<style scoped lang="scss">

</style>