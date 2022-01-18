<template>
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
</template>

<script>

    export default {
        name: 'VDirectiveVCloak',
        data(){
            return {}
        },
        components: {},
        props: [
            'messageVCloak'
        ], 
        computed: {}
    }
    
</script>

<style scoped lang="scss">
    [v-cloak] {
        display: none;
    }
</style>