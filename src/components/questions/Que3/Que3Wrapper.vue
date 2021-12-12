<template>
    <div id="que-3" class="block">
        <h3>
            Вопрос 3: Что такое "props"?
        </h3>
        <p>
            "Props" - входные параметры, 
            пользовательские атрибуты, 
            которые может принимать компонента.
        </p>
        <p>
            "Props" являются свойствами компонента
            и могут быть использованы в шаблонах
            и логике.
        </p>
        <p>
            Список свойств, которые ожидает компонента,
            объявляются в свойстве "props" (может быть сколько угодно).
        </p>
        <p>
            Передаются свойства от родителя к ребенку, 
            помогают реализовать компонентный подход. 
        </p>
        <div class="block__solution">
            <PostWrapper 
                :titleToPost="titleToPost" 
                :description="description"
                :number="number"
                :boolFlag="boolFlag"
                :humanObj="humanObj"
                :name="humanObj.name"
                :sayHi="humanObj.sayHi"
            >
            </PostWrapper>
        </div>
    </div>
</template>

<script>
    import PostWrapper from '@/components/questions/Que3/PostWrapper'

    export default {
        name: 'Que3Wrapper',
        data(){
            return {
                titleToPost: 'Prop value to post (!came from prop!)',
                description: 'love to send props',
                number: 42,
                boolFlag: true,
                arrayToPost: [1, 2, 3, 4],
                humanObj: {
                    name: 'Petr',
                    sayHi: () => {alert('Передаю привет!')}
                }
            }
        },
        components: {
            PostWrapper
        }
    }
</script>

<style scoped lang="scss">
    .post-wrapper {
        width: inherit;
        height: fit-content;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px;
    }
</style>