<template>
    <div id="que-16" class="block">
        <h3>
            Вопрос 16: Что такое директивы во vue?
        </h3>
        <p>
            Директивы - специльные <span>атрибуты</span>, которые
            мы можем использовать внутри html шаблона внутри компоненты <span>VUE</span>.
        </p>
        <p>Директива позволяет добавить дополнительную функциональность и сократить количество кода</p>
        <ol>
            <p><strong>Директивы</strong> VUE: </p>
            <li><span>v-text</span> --> type: <span>string</span>. Аналогична интерполяции.</li>
            <li><span>v-html</span> --> type: <span>string</span>. Обновление свойства <span>innerHtml</span>.</li>
            <li><span>v-show</span> --> type: <span>any</span>. Переключение CSS-свойства <span>display</span> в зависимости от истинности.</li>
            <li><span>v-if</span> --> type: <span>any</span>. При переключении компоненты будут <span>уничтожены</span>.</li>
            <li><span>v-else</span> --> type: <span>any</span>. Обозначает <span>«блок else»</span> для <span>v-if</span> или цепочки <span>v-if/v-else-if</span>.</li>
            <li><span>v-else-if</span> --> type: <span>any</span>. Обозначает <span>«блок else if»</span> для <span>v-if</span>. Можно использовать для создания цепочек условий.</li>
            <li><span>v-for</span> --> type: <span>Array | Object | number | string | Iterable</span>. Многократно отрисовывает элемент или блок шаблона на основании исходных данных.</li>
            <li><span>v-on</span> --> type: <span>Function | Инлайн-выражение | Object</span>. Прикрепляет обработчик <span>события</span> к элементу.</li>
            <li><span>v-bind</span> --> type: <span>any</span>. Динамически привязывает один или несколько атрибутов или входных параметров компонента к <span>выражению</span>.</li>
            <li><span>v-model</span> --> type: <span>any</span>. Создаёт двухстороннюю привязку к элементу ввода формы или к компоненту.</li>  
            <li><span>v-slot</span> --> type: <span>any</span>. Обозначение именованного слота или слота, который получает входные параметры.</li>
            <li>
                <span>v-pre</span> --> type: <span>---</span>. 
                Пропускает компиляцию для элемента и всех его потомков. Можно использовать для отображения необработанных тегов 
                фигурных скобок. Пропуск большого количества элементов без директив на них также может ускорить компиляцию.
            </li>
            <li><span>v-cloak</span> --> type: <span>---</span>. Директива остаётся на элементе, пока связанный с ним экземпляр компонента не завершит компиляцию..</li>
            <li><span>v-once</span> --> type: <span>---</span>. Отрисовывает один раз элемент или компонент.</li>
            <li>
                <span>v-memo</span> --> type: <span>Array</span>. 
                Мемоизация части поддерева шаблона. Может использоваться как для элементов, так и для компонентов. 
                Директива ожидает массив фиксированной длины зависимых значений, которые станут использоваться для сравнения при мемоизации. 
                Если каждое значение массива осталось таким же, как при последней отрисовке, то обновление всего поддерева будет пропущено.
            </li>
        </ol>

        <VDirectiveVText :messageDoNoUseVText="messageDoNoUseVText" :messageVText="messageVText"/>
        <VDirectiveVHtml :messageVhtml="messageVhtml"/>
        <VDirectiveVShow :messageVShow="messageVShow" :changeMessageVShow="changeMessageVShow"/>
        <VDirectiveIfElse :messageVShow="messageVShow" :changeMessageVShow="changeMessageVShow"/>
        <VDirectiveVFor :goods="shop.goods"/>
        <VDirectiveVOn :messageVonCounter="messageVonCounter"/>
        <VDirectiveVBind :messageVBind="messageVBind"/>
        <VDirectiveVModel/>
        <VDirectiveVSlot/>
        <VDirectiveVPre/>
        <VDirectiveVCloak :messageVCloak="messageVCloak"/>
        <VDirectiveVOnce :messageVOnce="messageVOnce"/>
        <VDirectiveVMemo/>

    </div>
</template>

<script>

    import VDirectiveVText from './directives/v-text/VDirectiveVText.vue'
    import VDirectiveVHtml from './directives/v-html/VDirectiveVHtml.vue'
    import VDirectiveVShow from './directives/v-show/VDirectiveVShow.vue'
    import VDirectiveIfElse from './directives/v-if-else/VDirectiveIfElse.vue'
    import VDirectiveVFor from './directives/v-for/VDirectiveVFor.vue'
    import VDirectiveVOn from './directives/v-on/VDirectiveVOn.vue'
    import VDirectiveVBind from './directives/v-bind/VDirectiveVBind.vue'
    import VDirectiveVModel from './directives/v-model/VDirectiveVModel.vue'
    import VDirectiveVSlot from './directives/v-slot/VDirectiveVSlot.vue'
    import VDirectiveVPre from './directives/v-pre/VDirectiveVPre.vue'
    import VDirectiveVCloak from './directives/v-cloak/VDirectiveVCloak.vue'
    import VDirectiveVOnce from './directives/v-once/VDirectiveVOnce.vue'
    import VDirectiveVMemo from './directives/v-memo/VDirectiveVMemo.vue'

    export default {
        name: 'Que16Wrapper',
        data() {
            return {
                messageVText: 'не используйте v-text',
                messageDoNoUseVText: 'используйте классическую интерполяцию',
                messageVhtml: 'Динамическая отрисовка произвольного HTML-кода на сайте — опасная практика, которая приводит к XSS-уязвимостям (opens new window). Передавайте в v-html содержимое, которому можно доверять, и НИКОГДА не передавайте содержимое, которое предоставляется пользователем.',
                messageVShow: true,
                messageVonCounter: 0,
                messageVBind: 'Реализация двустороннего связывания с моделью "messageVBind" ',
                messageVCloak: 'Сообщение не видно до завершения компиляции экземпляра компонента',
                messageVOnce: ' его изменение не будут повторно отрисованы',

                shop: {
                    goods: ['tv', 'console', 'game']
                }
            }
        },
        mixins: [],
        components: {
            VDirectiveVText,
            VDirectiveVHtml,
            VDirectiveVShow,
            VDirectiveIfElse,
            VDirectiveVFor,
            VDirectiveVOn,
            VDirectiveVBind,
            VDirectiveVModel,
            VDirectiveVSlot,
            VDirectiveVPre,
            VDirectiveVCloak,
            VDirectiveVOnce,
            VDirectiveVMemo,
        },
        methods: {
            changeMessageVShow() {
                this.messageVShow ? this.messageVShow = false : this.messageVShow = true;
            }
        },
        computed: {},
        watch: {},
    }
</script>

<style scoped lang="scss">
    .block {
        &__solution {}

        &__flex-column {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 30px;

            &--row {
                display: flex;
                flex-direction: row;
            }
        }
    }
</style>