<template>
    <div id="que-8" class="block">
        <h3>
            Вопрос8: Постраничная навигация во Vue?
        </h3>
        <p>Vue позволяет создавать SPA.</p>
        <p>
            Как организовать постраничную навигацию в SPA с помощью Vue? 
            Для этого есть Vue Router. Нужно только указать массив маршрутов.
        </p>
        <p>Код из файла: 
            <span>router/index.js</span>
        </p>

        <pre>
            import Vue from 'vue'
            import VueRouter from 'vue-router'
            import Book from '../views/Book.vue'
            Vue.use(VueRouter)
            const <span>routes</span> = [
            &emsp;{
                &emsp;&emsp;<span>path: '/'</span>,
                &emsp;&emsp;name: 'Book',
                &emsp;&emsp;component: Book
            &emsp;},
            &emsp;{
                &emsp;&emsp;<span>path: '/about'</span>,
                &emsp;&emsp;name: 'About',
                &emsp;&emsp;// route level code-splitting
                &emsp;&emsp;// this generates a separate chunk (about.[hash].js) for this route
                &emsp;&emsp;// which is lazy-loaded when the route is visited.
            &emsp; &emsp;component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            &emsp;}
            ]
            const router = new VueRouter({
            routes
            })
            export default router
        </pre>

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