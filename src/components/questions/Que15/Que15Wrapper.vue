<template>
    <div id="que-15" class="block">
        <h3>
            Вопрос 15: Что такое mixin во vue?
        </h3>
        <p>
            Mixin - это кусочек компонента, некий переиспользуемый функционал, 
            который при импорте объединяется с компонентом и добавляет <span>новый</span> функционал.
        </p>
        <p>
            Для добавления <span>mixin a</span> в компонент используем свойство <span>mixins: [mixinA]</span>
        </p>
        <p>Логика в этом компоненте работает через интеграцию <span>mixin</span></p>
        <p>
            Логика mixin a строится так же как у компоненты VUE, 
            туда добавляется вся <span>логика</span> VUE: свойства и методы.
        </p>
        <p> 
            <strong>ВАЖНО!!!</strong> Если в <span>data()</span> нет ничего, то не пишем ее, 
            так как пустая <span>data()</span> при импорте <span>mixin</span> создает ошибку. 
        </p>
        <div class="block__solution">
            <h3>Счетчик = <span>{{counter}}</span> </h3>
            <div>
                <button @click="incrementCounter">
                    Увеличить счетчик !
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import CounterMixin from './CounterMixin'

    export default {
        name: 'Que15Wrapper',
        mixins: [CounterMixin],
        components: {},
        methods: {},
        computed: {},
        watch: {},
    }
</script>

<style scoped lang="scss">
    .block {
        &__solution {}
    }
</style>