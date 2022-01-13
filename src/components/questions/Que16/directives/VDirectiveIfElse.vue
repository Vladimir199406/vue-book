<template>
    <div class="block__solution">
        <h4>4, 5, 6) Directive: <span>v-if, v-else-if, v-else</span></h4>
        <div class="block__flex-column">
            <p>Условная отрисовка, которая <strong>НЕ</strong> остается в разметке:</p>
            <p v-if="messageVShow">{{messageVShow}}</p>
            <p v-else-if="!messageVShow">{{messageVShow}}</p>
            <button @click="changeMessageVShow()">Сменить значение messageVShow"</button>
            <ul>
                <h4>Вывод:</h4>
                <li>Отрисовывает элемент по условию, в зависимости от истинности указанного выражения. При переключении элемент и все содержащиеся в нём директивы / компоненты будут уничтожены и созданы заново.</li>
                <li>Обозначает «блок else if» для v-if. Можно использовать для создания цепочек условий.</li>
                <li> <strong>v-else, v-else-if</strong> Ограничение: предыдущий элемент должен иметь директиву v-if или v-else-if.</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VDirectiveIfElse',
        data(){
            return {}
        },
        components: {},
        props: [
            'messageVShow',
            'changeMessageVShow'
        ]
    }
</script>

<style scoped lang="scss">

</style>