<template>
        <div class="block__solution">
            <h4>1) Directive: <span>v-text</span>:</h4>
            <div class="block__flex-column">
                <p>
                    Обновляет свойство элемента textContent (opens new window). 
                    При необходимости обновления лишь части содержимого textContent 
                    лучше использовать интерполяцию с фигурными скобками.
                </p>
                <ul>
                    <h4>Вывод:</h4>
                    <li>v-text: <span v-text="messageVText"> </span></li>
                    <li>интерполяция в классическом виде: <span>{{messageDoNoUseVText}}</span></li>
                </ul>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'VDirectiveVText',
        data(){
            return {}
        },
        components: {},
        props: [
            'messageVText',
            'messageDoNoUseVText'
        ]
    }
</script>

<style scoped lang="scss">

</style>