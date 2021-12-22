<template>
    <div id="que-8" class="block">
        <h3>
            Вопрос8: Постраничная навигация во Vue?
        </h3>
        <p>Vue позволяет создавать SPA.</p>
        <p>
            Как организовать постраничную навигацию в SPA с помощью Vue? 
            Для этого есть Vue Router и указать массив маршрутов.
        </p>
        <p>Код из файла: 
            <span>router/index.js</span>
        </p>
        <p>
            <pre>
                import Vue from 'vue'<br>
                import VueRouter from 'vue-router'<br>
                import Book from '../views/Book.vue'<br><br>
                Vue.use(VueRouter)<br><br>
               const <span>routes</span> = [<br>
                &emsp;{<br>
                    &emsp;&emsp;<span>path: '/'</span>,<br>
                    &emsp;&emsp;name: 'Book',<br>
                    &emsp;&emsp;component: Book<br>
                &emsp;},<br>
                &emsp;{<br>
                    &emsp;&emsp;<span>path: '/about'</span>,<br>
                    &emsp;&emsp;name: 'About',<br>
                    &emsp;&emsp;// route level code-splitting<br>
                    &emsp;&emsp;// this generates a separate chunk (about.[hash].js) for this route<br>
                    &emsp;&emsp;// which is lazy-loaded when the route is visited.<br>
                &emsp; &emsp;component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')<br>
                &emsp;}<br>
                ]<br>
                const router = new VueRouter({<br>
                routes<br>
                })<br><br>
                export default router<br>
            </pre>
        </p>
        <p>
            Далее использование в <span>компоненте: </span> в двойном теге <span>"router-view"</span> 
            используем для навигации <span>"router-link"</span>.
        </p>
        <p>В данном руководстве модель <span>SPA</span> реализована путем использования <span> VUE Router</span> полностью.</p>
    </div>
</template>

<script>
    export default {
        name: 'Que8Wrapper',
        data(){
            return {}
        },
        components: {}
    }
</script>

<style scoped lang="scss">

</style>