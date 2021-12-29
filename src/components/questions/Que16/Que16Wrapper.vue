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
        <ul>
            <p><span>Директивы</span> VUE: </p>
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
        </ul>
        <div class="block__solution">
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Que16Wrapper',
        mixins: [],
        components: {},
        methods: {},
        computed: {},
        watch: {},
    }
</script>

<style scoped lang="scss">
    .block {
        ul > li {
            margin: 0 0 50px 30px
        }
        &__solution {
        }
    }
</style>