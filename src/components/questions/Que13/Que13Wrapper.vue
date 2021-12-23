<template>
    <div id="que-13" class="block">
        <h3>
            Вопрос 13: Как отрисовать компонент по условию?
        </h3>
        <div class="block__solution">
           <div class="block__solution--list" v-if="counter < 0">v-if: {{counter}}</div>
           <div class="block__solution--list" v-else-if="counter === 0">v-else-if: {{counter}}</div>
           <div class="block__solution--list" v-else>v-else: {{counter}}</div>
           <div class="block__solution--list">
               <button @click="counterPlusOne()">Counter ++</button>
               <button @click="counterMinusOne()">Counter --</button>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Que13Wrapper',
        data(){
            return {
                counter: -1,
            }
        },
        components: {},
        methods: {
            counterPlusOne() {
                this.counter = this.counter + 1;
            },

            counterMinusOne() {
                this.counter = this.counter - 1;
            }
        },
        computed: {},
        watch: {},
    }
</script>

<style scoped lang="scss">
    .block {
        &__solution {
            display: flex;
            flex-direction: row;
            justify-content: center;
            
            &--list {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
    }
</style>