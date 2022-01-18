<template>
    <div id="que-10" class="block">
        <h3>
            Вопрос 10: Как отследить изменения модели?
        </h3>
        <p>Состояние модели возможно отследить с помощью свойства 
            <span>watch()</span> и создать одноименный  с отслеживаемой 
            <span>моделью</span> метод.  
        </p>
        <div class="block__solution">
            <h4>Пример:</h4>
            <p>{{counter}}</p>
            <button @click="counter++">Увеличить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Que10Wrapper',
        data(){
            return {
                counter: 0,
            }
        },
        components: {},
        watch: {
            counter(newValue) {
                console.log('Изменение counter', newValue);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>