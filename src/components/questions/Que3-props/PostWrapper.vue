<template>
    <div>
        <p>
            Заголовок из родительского компонента: 
            <span>{{titleToPost}}</span>
        </p>
        <p>
            Описание из родительского компонента:
            <span>{{description}}</span>
        </p>
        <p>
            Число из родительского компонента:
            <span>{{number}}</span>
        </p>
        <p>
            Флаг из родительского компонента:
            <span>{{boolFlag}}</span>
        </p>
        <p>
            Массив из родительского компонента:
            <span>{{arrayToPost}}</span>
        </p>
        <p>
            Объект и свойства из родительского компонента:
            <span>Имя объекта: {{name}}</span>,
        </p>
        <div class="post-wrapper__block-with-content">
            <p>
                Метод объекта @click на кнопке:
            </p>
            <button @click="sayHi()">
                <span>Поздороваться</span>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PostWrapper',
        data(){
            return {}
        },
        components: {},
        props: [
            'titleToPost', 
            'description', 
            'number', 
            'boolFlag',
            'arrayToPost',
            'humanObj',
            'name',
            'sayHi'
        ]
    }
</script>

<style scoped lang="scss">
    .post-wrapper {
        width: inherit;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &__block-with-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
    }

    @media screen and (min-width: 768px) {
        .post-wrapper {
            &__block-with-content {
                flex-direction: row;
            }
        }
    }
</style>