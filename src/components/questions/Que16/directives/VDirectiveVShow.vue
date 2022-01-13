<template>
    <div class="block__solution">
        <h4>3) Directive: <span>v-show</span></h4>
        <div class="block__flex-column">
            <p>Условная отрисовка, которая остается в разметке:</p>
            <p><span v-show="messageVShow">{{messageVShow}}</span></p>
            <p><span v-show="!messageVShow">{{messageVShow}}</span></p>
            <button @click="changeMessageVShow()">Сменить значение messageVShow"</button>
            <ul>
                <h4>Вывод:</h4>

                <li>Отображает элемент по условию, выполняя переключение у элемента CSS-свойства display в зависимости от истинности указанного выражения.</li>
                <li>Директива запускает анимации перехода при изменении состояния.</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VDirectiveVShow',
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