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
            <li><span>v-pre</span> --> type: <span>---</span>. Пропускает компиляцию для элемента и всех его потомков. Можно использовать для отображения необработанных тегов фигурных скобок. Пропуск большого количества элементов без директив на них также может ускорить компиляцию.</li>
            <li><span>v-cloak</span> --> type: <span>---</span>. Директива остаётся на элементе, пока связанный с ним экземпляр компонента не завершит компиляцию..</li>
            <li><span>v-once</span> --> type: <span>---</span>. Отрисовывает один раз элемент или компонент.</li>
            <li><span>v-memo</span> --> type: <span>Array</span>. Мемоизация части поддерева шаблона. Может использоваться как для элементов, так и для компонентов. Директива ожидает массив фиксированной длины зависимых значений, которые станут использоваться для сравнения при мемоизации. Если каждое значение массива осталось таким же, как при последней отрисовке, то обновление всего поддерева будет пропущено.</li>
        </ol>

        <VDirectiveVText :messageDoNoUseVText="messageDoNoUseVText" :messageVText="messageVText"/>
        <VDirectiveVHtml :messageVhtml="messageVhtml"/>
        <VDirectiveVShow :messageVShow="messageVShow" :changeMessageVShow="changeMessageVShow"/>
        <VDirectiveIfElse :messageVShow="messageVShow" :changeMessageVShow="changeMessageVShow"/>
        <VDirectiveVFor :goods="shop.goods"/>
        <VDirectiveVOn :messageVonCounter="messageVonCounter"/>

        <div class="block__solution">
            <h4>9) Directive: <span>v-bind</span></h4>
            <div class="block__flex-column">
                <p>Динамически привязывает один или несколько атрибутов или входных параметров компонента к выражению.</p>
                <ul>
                    <h4>Аргумент - attrOrProp (опционально), пример: </h4>
                    <li><span>:bind || :value || :src</span> - привязка к атрибуту</li>
                    <li><span>:[key]</span> - привязка при динамическом имени атрибута</li>
                    <li><span>:style</span>привязка стилей</li>
                    <li><span>:prop</span> - привязка входного параметра</li>
                </ul>
                <ul>
                    <h4>Модификаторы:</h4>
                    <li>.camel — преобразование имён атрибутов из kebab-case в camelCase.</li>
                    <li>.prop — форсирует установку привязки как свойством DOM. <span>3.2+</span>.</li>
                    <li>.attr —  форсирует установку привязки атрибутом DOM <span>3.2+</span>.</li>
                </ul>
                <p>Простейший пример:</p>
                <input 
                    :bind="messageVBind"
                    :value="messageVBind"
                    @input="messageVBind = $event.target.value"
                    type="text"
                >
                <p>Здесь значение модели, которая меняется в динамической связке: <span>{{messageVBind}}</span></p>
                <ul>
                    <h4>Вывод:</h4>
                    <li>Используется для связывания модели с моделями.</li>
                    <li>
                        При использовании с атрибутами class или style в качестве 
                        значений допускаются массивы и объекты. Подробнее можно узнать 
                        в разделе руководства по ссылкам ниже.
                    </li>
                    <li>При привязке входных параметров к дочернему компоненту необходимо также объявлять их внутри него.</li>
                    <li>
                        При использовании без аргумента можно привязать объект из пар имя-значение. 
                        Обратите внимание, в этом режиме не поддерживаются массивы или объекты для 
                        class и style.
                    </li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>10) Directive: <span>v-model</span></h4>
            <div class="block__flex-column">
                <p>Создаёт двухстороннюю привязку к элементу ввода формы или к компоненту.</p>
                <ul>
                    <h4>Используется с: </h4>
                    <li>input</li>
                    <li>select</li>
                    <li>textarea</li>
                </ul>
                <ul>
                    <h4>Модификаторы:</h4>
                    <li>.lazy — отслеживание события change вместо input</li>
                    <li>.number — приведение корректной строки со значением к числу</li>
                    <li>.trim —  удаление пробелов в начале и в конце строки</li>
                </ul>
                                <ul>
                    <h4>Вывод:</h4>
                    <li>
                       Обычное использование. Можно использовать директиву v-model 
                       для создания двусторонней привязки данных с элементами форм: input, 
                       textarea и select. Она автоматически выбирает правильный способ 
                       обновления элемента в зависимости от его типа. Хоть v-model и 
                       выглядит как некая магия, по сути это лишь синтаксический сахар 
                       для обновления данных при вводе пользователем, плюс небольшие 
                       доработки для некоторых граничных случаев.
                    </li>
                    <li>
                        v-model игнорирует начальное значение атрибутов value, 
                        checked или selected на любых элементах форм. Источником 
                        истины всегда считаются данные текущего активного экземпляра. 
                        Начальное значение нужно объявить на стороне JavaScript, 
                        внутри опции data компонента.
                    </li>
                    <li>
                        Внутренне v-model использует разные свойства и генерирует 
                        разные события для различных элементов форм:
                        <ol>
                            <li>элементы для ввода текста и многострочного текста используют свойство value и событие input</li>
                            <li>чекбоксы и радиокнопки используют свойство checked и событие change;</li>
                            <li>выпадающие списки используют свойство value и событие change.</li>
                        </ol>
                    </li>
                    <li>Интерполяция внутри textarea не работают. Используйте директиву v-model вместо неё.</li>
                    <li>
                        При использовании v-model на компоненте по умолчанию используется входной параметр 
                        modelValue и событие update:modelValue. Их можно изменить через аргумент v-model.
                        <span>v-model:name="updateName"</span>.
                        <p><strong>СМОТРИ раздел "Продвинутые вопросы !"</strong></p>
                    </li>
                </ul>
            </div>
        </div>
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
                                v-slot:имяСозданногоВсамойКомпонентеСлота
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
        <div class="block__solution">
            <h4>12) Directive: <span>v-pre</span></h4>
            <div class="block__flex-column">
                <p>
                    Пропускает компиляцию для элемента и всех его потомков. 
                    Пропуск большого количества элементов без директив на них также может 
                    ускорить компиляцию.
                </p>
                <span v-pre> <span>{{ это не будет скомпилировано }}</span></span>
                <ul>
                    <h4>Вывод:</h4>
                    <li>Можно использовать для отображения необработанных тегов фигурных скобок. </li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>13) Directive: <span>v-cloak</span></h4>
            <div class="block__flex-column">
                <p>
                    Директива остаётся на элементе, пока связанный с ним экземпляр 
                    компонента не завершит компиляцию. В сочетании с 
                    CSS-правилом <span>[v-cloak] { display: none }</span> позволяет 
                    скрывать нескомпилированные шаблоны до тех пор, пока 
                    не будет готов экземпляр компонента.
                </p>
                <div v-cloak> 
                    {{messageVCloak}}
                </div>
                <ul>
                    <h4>Вывод:</h4>
                    <li>Элемента div не будет видно до завершения компиляции.</li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>14) Directive: <span>v-once</span></h4>
            <div class="block__flex-column">
                <p>
                    Отрисовывает один раз элемент или компонент. 
                    При последующих обновлениях данных и перерисовках 
                    элемент/компонент и все его потомки будут считаться 
                    статичными и пропускаться. Может использоваться для 
                    оптимизации производительности обновлений.
                </p>
                <p v-once>Это значение никогда не изменится, оно больше не реактивно: <span>{{ messageVOnce }}</span>.</p>
                <ul>
                    <h4>Вывод:</h4>
                    <li>Можно использовать для оптимизации производительности обновлений</li>
                    <li>
                        Начиная с версии 3.2, можно использовать мемоизацию части шаблона, 
                        с возможностью указания условий для инвалидации, с помощью директивы v-memo.
                    </li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>15) Directive: <span>v-memo 3.2+</span></h4>
            <div class="block__flex-column">
                <p>
                    Мемоизация части поддерева шаблона. 
                    Может использоваться как для элементов, так и для компонентов. 
                    Директива ожидает массив фиксированной длины зависимых значений, 
                    которые станут использоваться для сравнения при мемоизации. 
                    Если каждое значение массива осталось таким же, как при последней 
                    отрисовке, то обновление всего поддерева будет пропущено. Например:
                </p>
                <ul>
                    <h4>Вывод:</h4>
                    <li>
                        v-memo нужна исключительно для микрооптимизации сценариев, 
                        где критически важна производительность, и должна использоваться 
                        крайне редко. Наиболее частый случай, где она может оказаться 
                        полезной — отрисовка больших списков с помощью v-for (когда length > 1000).
                    </li>
                    <li>
                        v-memo также можно использовать и на компонентах, чтобы вручную 
                        предотвращать нежелательные обновления в некоторых крайних случаях, 
                        когда проверка обновления дочернего компонента была де-оптимизирована. 
                        Но, повторимся, на разработчике лежит полная ответственность за указание 
                        правильного массива зависимостей, для избежания пропуска необходимых обновлений.
                       <p><strong> СМОТРИ раздел "Продвинутые вопросы !" </strong></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import VDirectiveVText from './directives/VDirectiveVText.vue'
    import VDirectiveVHtml from './directives/VDirectiveVHtml.vue'
    import VDirectiveVShow from './directives/VDirectiveVShow.vue'
    import VDirectiveIfElse from './directives/VDirectiveIfElse.vue'
    import VDirectiveVFor from './directives/VDirectiveVFor.vue'
    import VDirectiveVOn from './directives/VDirectiveVOn.vue'

    import TestSlot from './TestSlot.vue'
    import TestSlotsMany from './TestSlotsMany.vue'
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

            TestSlot,
            TestSlotsMany,        },
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

        [v-cloak] {
            display: none;
        }
    }
</style>