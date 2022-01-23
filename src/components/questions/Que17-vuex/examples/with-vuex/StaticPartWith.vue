<template>
    <div>
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
    </div>
</template>

<script>

    export default {
        name: 'StaticPartWith',
    }
</script>

<style scoped lang="scss">

    pre {
        line-height: 20px;    
    }
    
</style>
