<template>
    <div>
        <h3><span>Пример 1: Реализация работы с данными БЕЗ VUEX</span> </h3>
        <div class="block__solution--text">
            <p>Создаем модель: <span>postsWithoutVuex: [];</span></p>
            <p>Выполняем запрос, получаем данные. Обновляем модель: </p>
            <pre>
            async mounted() {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/posts?_limit=3"
                );
                this.postsWithoutVuex = await res.json();
            },
            </pre>
            <p>Выводим список полученных статей:</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StaticPartWithout'
    }
</script>

<style scoped lang="scss">
    pre {
        line-height: 20px;    
    }

    .block {

        &__solution {
            display: block;
            align-items: unset !important;

            &--text {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }
        }
    }
</style>