<template>
    <div id="que-17" class="block">
        <h3>
            Вопрос 17: Что такое VUEX?
        </h3>
        <p>
            VUEX - менеджер состояния приложения, 
            который позволяет организованно работать
            организованно.
        </p>
        <div class="block__solution">
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
            <div class="block__articles-wrapper articles-wrapper">
                <div class="articles-wrapper__article" v-for="post in postsWithoutVuex" :key="post.id">
                    <h5>{{post.title}}</h5>
                    <p>{{post.body}}</p>
                </div>
            </div>
        </div>

        <div class="block__solution">
            <h3><span>Пример 2: Реализация работы с данными C VUEX</span> </h3>
            <div class="block__solution--text">
                <p>Устанавливаем VUEX <span>vue-cli || npm/yarn</span></p>

                <p>
                    Создаем VUEX в<span> store/index.js </span>: 
                    <br>
                    <pre>

                        import Vue from 'vue'
                        import Vuex from 'vuex'

                        <span>Vue.use(Vuex)</span>

                        export default new Vuex.Store({
                        <span>
                        state: {}, // начальные данные приложения
                        getters: {} //позволяет получать данные из store (напрямую нельзя обращаться к state)
                        mutations: {}, // объект, содержит методы по изменению store
                        actions: {}, //является объектом
                        modules: {} // декомпозиция логики VUEX store
                        </span>
                        })
                    </pre>
                </p>


                <p>
                    Настраиваем VUEX в<span> main.js </span>: 
                    <br>
                    <pre>

                        import Vue from 'vue'
                        import App from './App.vue'
                        import router from './router'
                        <span>import store from './store'</span>

                        Vue.config.productionTip = false

                        new Vue({
                        router,
                        <span>store,</span>
                        render: h => h(App)
                        }).$mount('#app')
                    </pre>
                </p>
                <p>
                    Если нужно, создаем модули для декомпозиции VUEX:
                    <br>
                    <pre>

                        export default {
                            state: {
                                posts: [],
                            },
                            getters: {
                                allPosts(state) {
                                    return state.posts;   
                                }
                            },
                            actions: {},
                            mutations: {},
                            modules: {}
                        }
                    </pre>
                </p>
                <p>
                    В интересующей нас компоненте делаем спец импорт:
                    <br>
                    <pre>

                        import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
                    </pre>
                </p>
                <p>
                    Работаем с Vuex:
                    <br> 
                    <pre>

                        async mounted() {
                            this.fetchPosts(4); // res async logic from vuex
                        },
                        mixins: [],
                        components: {
                            PostForm,
                        },
                        methods: {
                            ...mapActions(['fetchPosts']),
                        } ,
                        computed: {
                            ...mapGetters(['validPosts', 'postsCount']),
                        },
                        watch: {},
                    </pre>
                </p>
                <p>Количество постов {{postsCount}}</p>
                <p class="block__solution--error">!!! Remember that NO VALIDATION is working now, just getting filtered data by getter !!!</p>
                <PostForm/>
                <div class="block__articles-wrapper articles-wrapper">
                    <div class="articles-wrapper__article" v-for="post in validPosts" :key="post.id">
                        <h5>{{post.title}}</h5>
                        <p>{{post.body}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex'
    //import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

    import PostForm from './post-form/PostForm.vue'

    export default {
        name: 'Que17Wrapper',
        data() {
            return {
                postsWithoutVuex: []
            }
        },
        async mounted() {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=3"
            );
            this.postsWithoutVuex = await res.json(); // res async logic local

            this.fetchPosts(4); // res async logic from vuex
        },
        mixins: [],
        components: {
            PostForm,
        },
        methods: {
            ...mapActions(['fetchPosts']),
        } ,
        computed: {
            ...mapGetters(['validPosts', 'postsCount']),
        },
        watch: {},
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

        &__articles-wrapper, .articles-wrapper {
            display: flex;
            flex-direction: column;

            &__article {
                border: 2px solid burlywood;
                border-radius: 10px;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                margin-bottom: 20px;
                margin: 10px;
            }
        }
    }
</style>