<template>
    <div class="block__solution">
        <h4>8) Directive: <span>v-on</span></h4>
        <div class="block__flex-column">
            <p>Прикрепляет обработчик события к элементу. </p>
            <ul>
                <h4>Аргумент - событие, пример: </h4>
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
            <button @click="mutableMessageVonCounter++"> Обновелние счетчика: <strong> {{mutableMessageVonCounter}}</strong> </button>
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
</template>

<script>
    export default {
        name: 'VDirectiveVOn',
        data(){
            return {
                mutableMessageVonCounter: this.messageVonCounter,
                //do not change prop, use a mutate copy
            }
        },
        components: {},
        props: [
            'messageVonCounter'
        ], 
        computed: {}
    }
</script>

<style scoped lang="scss">

</style>