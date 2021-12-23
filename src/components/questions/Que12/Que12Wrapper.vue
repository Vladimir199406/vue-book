<template>
    <div id="que-12" class="block">
        <h3>
            Вопрос 12: Что такое интерполяция?
        </h3>
        <p>
            Интереполяция - простейшая форма привязки, 
            которая позволяет выводить в шаблон данные.
        </p>
        <div class="block__solution">
            Рассмотрим пример на модели <span>counter</span>
            <button @click="updateCounter()">
                Увеличить кнопку
            </button>
            <p>
                Интерполяция <span>counter</span>{{counter}}
            </p>
            <p>
               Интерполяция <span>computed</span>x2 {{computedDoubleCounter}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Que12Wrapper',
        data(){
            return {
                counter: 0,
            }
        },
        components: {},
        methods: {
            updateCounter() {
                console.log('counter', this.counter);
                console.log('computedDoubleCounter', this.computedDoubleCounter);
                return this.counter++;
            }
        },
        computed: {
            computedDoubleCounter() {
                return this.counter * 2;
            }
        },
        watch: {},
    }
</script>

<style scoped lang="scss">
    .block {
        &__solution{}
    }
</style>