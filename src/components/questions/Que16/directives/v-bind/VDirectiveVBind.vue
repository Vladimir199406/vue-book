<template>
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
</template>

<script>
    export default {
        name: 'VDirectiveVBind',
        data(){
            return {}
        },
        components: {},
        props: [
            'messageVBind'
        ], 
        computed: {}
    }
</script>

<style scoped lang="scss">

</style>