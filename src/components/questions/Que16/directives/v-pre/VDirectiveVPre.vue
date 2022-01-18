<template>
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
</template>

<script>

    export default {
        name: 'VDirectiveVPre',
        data(){
            return {}
        },
        components: {},
        props: [], 
        computed: {}
    }
    
</script>

<style scoped lang="scss">

</style>