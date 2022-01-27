<template>
    <div class="block__solution">
        <h4>11) Directive: <span>v-slot</span></h4>
        <div class="block__flex-column">
            <p>Позволяет добавлять динамически разметку в УЖЕ готовый компонент</p>
            <p>Есть некоторый компонент: "testSlot"</p>
            <p>! Последующая информация рендерится через систему sloto`v, смотри исходники !</p>
            <TestSlot>
                По умолчанию если слот один, то информация идет в него, 
                НО есть возможность добавления множества слотов. 
            </TestSlot>
            <TestSlotsMany>
                <template v-slot:header>
                    <h1>При интеграции нескольких слотов, необходимо сделать следующее.</h1>
                </template>
                <template v-slot:body>
                    <h4>Шаги для создания:</h4>
                    <ul>
                        <li>Создаем слот в компоненте через тег "slot"</li>
                        <li>Присваиваем тегу "slot" атрибут "name", name="header"</li>
                        <li>
                            Вызываем парный тег с именем компоненты и <span>внутри</span>
                            вызова компоненты используем парный тег "template" с директивой 
                            v-slot:имя
                        </li>
                    </ul>
                </template>
                <template v-slot:footer>
                    <ul>
                        <h4>Вывод:</h4>
                        <li>
                            Не нужно именовать слот если информация/разметка полученная слотом в 
                            дальнейшем в одном блоке
                        </li>
                        <li>При использовании нескольких слотов используется атрибут "name"</li>
                        <li>Элемент "slot" без name неявно получает имя «default».</li>

                    </ul>
                </template>
            </TestSlotsMany>
        </div>
    </div>
</template>

<script>
    import TestSlot from './test-slots/TestSlot.vue'
    import TestSlotsMany from './test-slots/TestSlotsMany.vue'

    export default {
        name: 'VDirectiveVSlot',
        data(){
            return {}
        },
        components: {
            TestSlot,
            TestSlotsMany,        
        },
        props: [], 
        computed: {}
    }
</script>

<style scoped lang="scss">

</style>