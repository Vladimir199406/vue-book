<template>
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
</template>

<script>

    export default {
        name: 'VDirectiveVOnce',
        data(){
            return {}
        },
        components: {},
        props: [
            'messageVOnce'
        ], 
        computed: {}
    }
    
</script>

<style scoped lang="scss">

</style>