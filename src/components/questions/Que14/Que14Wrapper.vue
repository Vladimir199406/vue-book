<template>
    <div id="que-14" class="block">
        <h3>
            Вопрос 14: Разница между v-if и v-show?
        </h3>
        <div class="block__solution">
           <h4>
                <span>v-if</span>block
           </h4>
           <p>
               Согласно стандартной парадигме программирования существуют
               <ul>
                   <span>директивы:</span>
                   <li>v-if</li>
                   <li>v-else-if</li>
                   <li>v-else</li>
                </ul>
            </p>
            <p>
                v-if полностью <span>удаляется</span> из dom дерева когда условие не соблюдено.
            </p>
           <div class="block__solution--list" v-if="counter < 0">v-if: {{counter}}</div>
           <div class="block__solution--list" v-else-if="counter === 0">v-else-if: {{counter}}</div>
           <div class="block__solution--list" v-else>v-else: {{counter}}</div>
           <div class="block__solution--list">
               <button @click="counterPlusOne()">Counter ++</button>
               <button @click="counterMinusOne()">Counter --</button>
           </div>
        </div>
        <div class="block__solution">
            <h4>
                <span>v-show</span>block
           </h4>
           <p>Для каждого блока условия создается свой <span>v-show</span> + условие</p>
           <p>
               <span>v-show</span> блок существует в разметке <span>всегда</span>, но если его условие не выполняется, он <span>display:none</span>.
            </p>
           <div class="block__solution--list" v-show="counter < 0">v-show <span>меньше</span> 0: {{counter}}</div>
           <div class="block__solution--list" v-show="counter === 0">v-show <span>равен</span> 0: {{counter}}</div>
           <div class="block__solution--list" v-show="counter > 0">v-show <span>больше</span> 0: {{counter}}</div>
           <div class="block__solution--list">
               <button @click="counterPlusOne()">Counter ++</button>
               <button @click="counterMinusOne()">Counter --</button>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Que14Wrapper',
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