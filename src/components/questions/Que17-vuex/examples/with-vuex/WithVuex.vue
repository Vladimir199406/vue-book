<template>
        <div class="block__solution">
            <h3><span>Пример 2: Реализация работы с данными C VUEX</span> </h3>
            <div class="block__solution--text">
                <StaticPartWith/>
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
</template>

<script>

    import { mapGetters, mapActions } from 'vuex'
    import StaticPartWith from './StaticPartWith.vue'
    import PostForm from '../../post-form/PostForm.vue'

    export default {
        name: 'WithVuex',
        async mounted() {
            this.fetchPosts(4); // res async logic from vuex
        },
        components: {
            StaticPartWith,
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

    .block {

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
            }
        }
    }
    
</style>
