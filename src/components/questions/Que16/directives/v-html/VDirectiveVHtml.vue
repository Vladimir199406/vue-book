<template>
    <div class="block__solution">
        <h4>2) Directive: <span>v-html</span></h4>
        <div class="block__flex-column">
            <p>Вариант первый, переменная: <span>v-html="messageVhtml"</span></p>
            <p>Вариант второй, тег: <span>v-html="'div Сообщение /div '"</span></p>
            <ul>
                <h4>Вывод:</h4>
                <li v-html="'<div>Учтите, что содержимое будет вставляться как обычный HTML и не будет компилироваться или обрабатываться как шаблоны Vue. <div>'">
                    Локальные стили (scoped) в однофайловых компонентах также не будут применяться к содержимому v-html, 
                    потому что этот HTML никак не обрабатывается компилятором шаблонов Vue. 
                    При необходимости стилизовать содержимое в v-html вместо локального CSS 
                    можно использовать CSS-модули (opens new window)или указать дополнительный 
                    глобальный элемент 'style' с собственной стратегией модульности, такой как БЭМ.
                </li>
                <li v-html="messageVhtml"></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VDirectiveVHtml',
        data(){
            return {}
        },
        components: {},
        props: [
            'messageVhtml'
        ]
    }
</script>

<style scoped lang="scss">

</style>