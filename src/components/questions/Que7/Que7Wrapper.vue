<template>
    <div id="que-7" class="block">
        <h3>
            Вопрос 7:  Для чего нужен $emit?
        </h3>
        <p>
            Нужен для создания подписки на событие в дочернем компоненте.
        </p>
        <div class="block__solution">
            <p>Тестовая ситуация: 
                <span>3</span> 
                компонента.
                <span>Родитель</span>
                с 
                <span>2</span>
                компонентами детьми.
                Дети:
                <span>список постов</span>
                и
                <span>форма</span>
                с кнопкой для создания поста.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Que7Wrapper',
        data(){
            return {}
        },
        components: {}
    }
</script>

<style scoped lang="scss">

</style>