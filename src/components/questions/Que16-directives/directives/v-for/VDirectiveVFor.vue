<template>
    <div class="block__solution">
        <h4>7) Directive: <span>v-for</span></h4>
            <div class="block__flex-column--row">
                <p>Cписок товаров:&emsp;</p>
                <p v-for="item in goods" :key="item.key">
                    <span>&emsp;{{item}}&emsp;</span>
                </p>
            </div>
            <ul>
                <h4>Вывод:</h4>
                <li>
                    Многократно отрисовывает элемент или блок шаблона на основании исходных данных. 
                    Значение директивы должно использовать специальный синтаксис alias in expression, 
                    чтобы объявить переменную для текущего элемента итерации.
                </li>
                <li> :key="item.key" важный элемент для безопасности итераций, <strong>НЕ</strong> использовать индекс в качестве ключа: (элемент, индексНеИсользоватьКакКлюч) in элементы </li>
            </ul>
    </div>
</template>

<script>
    export default {
        name: 'VDirectiveVFor',
        data(){
            return {}
        },
        components: {},
        props: [
            'goods',
        ]
    }
</script>

<style scoped lang="scss">
    ul {
        padding-left: 0;
    }
</style>