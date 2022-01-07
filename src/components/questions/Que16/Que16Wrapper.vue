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
        <div class="block__solution">
            <h4>7) Directive: <span>v-for</span></h4>
            <div class="block__flex-column">
                <div class="block__flex-column--row">
                    <p>Cписок товаров:&emsp;</p>
                    <p v-for="item in shop.goods" :key="item.key">
                        <span>&emsp;{{item}}&emsp;</span>
                    </p>
                </div>
                <ul>
                    <h4>Вывод:</h4>
                    <li>
                        Многократно отрисовывает элемент или блок шаблона на основании исходных данных. 
                        Значение директивы должно использовать специальный синтаксис alias in expression, 
                        чтобы объявить переменную для текущего элемента итерации.
                    </li>
                    <li> :key="item.key" важный элемент для безопасности итераций, <strong>НЕ</strong> использовать индекс в качестве ключа: (элемент, индексНеИсользоватьКакКлюч) in элементы </li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>8) Directive: <span>v-on</span></h4>
            <div class="block__flex-column">
                <p>Прикрепляет обработчик события к элементу. </p>
                <ul>
                    Аргумент - событие, пример: 
                    <li>@<span>click</span> - по клику</li>
                    <li>@<span>submit</span> - при подтверждении на форме</li>
                    <li>@<span>keyup</span> - по нажатию клавиши</li>
                    <li>@<span>[event]</span> - динамическое имя события</li>
                </ul>
                <ul>
                    <h4>Модификаторы:</h4>
                    <li>.stop — вызывает event.stopPropagation().</li>
                    <li>.prevent — вызывает event.preventDefault().</li>
                    <li>.capture — отслеживает событие в режиме capture.</li>
                    <li>.self — вызывает обработчик только если событие произошло именно на этом элементе.</li>
                    <li>.{keyAlias} — вызывает обработчик только при нажатии определённой клавиши.</li>
                    <li>.once — вызывает обработчик события только один раз.</li>
                    <li>.left — вызывает обработчик только по нажатию левой кнопки мыши.</li>
                    <li>.right — вызывает обработчик только по нажатию правой кнопки мыши.</li>
                    <li>.middle — вызывает обработчик только по нажатию средней кнопки мыши.</li>
                    <li>.passive — добавляет обработчик события DOM с опцией { passive: true }.</li>
                </ul>
                <p>Модификаторы можно использовать по цепочке: @click.stop.prevent</p>
                <p>Простейший пример:</p>
                <button @click="messageVonCounter++"> Обновелние счетчика: <strong> {{messageVonCounter}}</strong> </button>
                <ul>
                    <h4>Вывод:</h4>
                    <li>
                        Прикрепляет обработчик события к элементу. 
                        Тип события определяется аргументом. Выражение 
                        может быть именем метода, инлайн-выражением или 
                        даже не указываться, при использовании модификаторов.
                    </li>
                    <li>
                        При использовании на обычном элементе отслеживает 
                        только нативные события DOM (opens new window). 
                        При использовании на компонентах отслеживает пользовательские 
                        события, которые были сгенерированы в нём.
                    </li>
                    <li>
                        При отслеживании нативных событий DOM в метод 
                        аргументом будет передаваться объект события. 
                        При указании инлайн-выражения, к объекту 
                        события можно получить доступ через специальное 
                        свойство $event: v-on:click="handle('ok', $event)".
                    </li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>9) Directive: <span>название</span></h4>
            <div class="block__flex-column">
                <p>Текст: <span>выделить</span></p>
                <ul>
                    <h4>Вывод:</h4>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>10) Directive: <span>название</span></h4>
            <div class="block__flex-column">
                <p>Текст: <span>выделить</span></p>
                <ul>
                    <h4>Вывод:</h4>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>11) Directive: <span>название</span></h4>
            <div class="block__flex-column">
                <p>Текст: <span>выделить</span></p>
                <ul>
                    <h4>Вывод:</h4>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>12) Directive: <span>название</span></h4>
            <div class="block__flex-column">
                <p>Текст: <span>выделить</span></p>
                <ul>
                    <h4>Вывод:</h4>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>13) Directive: <span>название</span></h4>
            <div class="block__flex-column">
                <p>Текст: <span>выделить</span></p>
                <ul>
                    <h4>Вывод:</h4>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>14) Directive: <span>название</span></h4>
            <div class="block__flex-column">
                <p>Текст: <span>выделить</span></p>
                <ul>
                    <h4>Вывод:</h4>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="block__solution">
            <h4>15) Directive: <span>название</span></h4>
            <div class="block__flex-column">
                <p>Текст: <span>выделить</span></p>
                <ul>
                    <h4>Вывод:</h4>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messageVText: 'не используйте v-text',
                messageDoNoUseVText: 'используйте классическую интерполяцию',
                messageVhtml: 'Динамическая отрисовка произвольного HTML-кода на сайте — опасная практика, которая приводит к XSS-уязвимостям (opens new window). Передавайте в v-html содержимое, которому можно доверять, и НИКОГДА не передавайте содержимое, которое предоставляется пользователем.',
                messageVShow: true,
                messageVonCounter: 0,

                shop: {
                    goods: ['tv', 'console', 'game']
                }
            }
        },
        name: 'Que16Wrapper',
        mixins: [],
        components: {},
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