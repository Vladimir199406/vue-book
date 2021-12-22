<template>
    <div id="que-9" class="block">
        <h3>
            Вопрос 9: Что такое computed свойства и как они работают?
        </h3>
        <p>
            <span>
                computed
            </span>
            свойства позволяют закешировать результат вычислений, 
            эти вычисления произведутся только в том случае если изменилась 
            какая-то <span>модель</span> используемая <span>внутри</span> computed свойства.
        </p>
        <div  class="block__solution">
            <h4>
                Пример с кол-вом элементов в массиве = 
                <span>{{list.length}}</span>
            </h4>
            <button @click="addOneElement()">Увеличить кол-во</button>
            <div class="block__list">
                <span>Массив:</span> 
                <ul v-for="item in list" :key="item">
                    <li>
                        {{item}} элемент массива <span>"list."</span>
                    </li>
                </ul>
            </div>
            <br>
            <br>
            <h4>
                Пример с помощью <span>computed</span> кол-вом элементов в массиве х2 = 
                <span>{{getDoubleLength}}</span>
            </h4>
            <button @click="addOneElement()">Увеличить кол-во</button>
        </div>
        <br>
        <br>
        <p>
            Пример <span>выше</span>показывает, что <span>computed</span> свойства
            следят за изменениями модели и не создают лишнюю нагруженность приложения.
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Que9Wrapper',
        data(){
            return {
                buttonCounter: 0,
                list: [1, 2],
            }
        },
        components: {},
        methods: {
            addOneElement() {
                this.list.push(this.list.length + 1);
            }
        },
        computed: {
            getDoubleLength() {
                return this.list.length * 2;
            }
        }
    }
</script>

<style scoped lang="scss">
    .block {
        &__list {
            display: block;
            width: 100%;
        }
    }
</style>