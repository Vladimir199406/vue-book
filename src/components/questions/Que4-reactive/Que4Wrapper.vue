<template>
    <div id="que-4" class="block">
        <h3>
            Вопрос 4: Что реактивность? Как работает реактивность во vue?
        </h3>
        <p>
            Реактиность - концепция, которая 
            позволяет приспосабливаться к изменению 
            данных декларативным способом.
        </p>
        <p>
            Данные изменены в коде, 
            видные изменения на странице.
        </p>
        <div class="block__solution">
            <button @click="likes++">
                <span>
                    Реактивно поставить лайк: 
                </span>
                <div>
                    <span> 
                        {{likes}} 
                    </span>
                </div>
            </button>
        </div>
        <p>
            Под "капотом" работают геттеры и сеттеры ( 
            <span>get()</span>  и <span>set()</span>
            ), после изменения вызывается функция 
            <span>render()</span>.
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Que4Wrapper',
        data(){
            return {
                likes: 0
            }
        },
        components: {}
    }
</script>

<style scoped lang="scss">

</style>