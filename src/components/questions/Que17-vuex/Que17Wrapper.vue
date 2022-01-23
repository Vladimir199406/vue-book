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
        <WithoutVuex :postsWithoutVuex="postsWithoutVuex"/>
        <WithVuex/>
    </div>
</template>

<script>

    import WithoutVuex from './examples/without-vuex/WithoutVuex.vue'
    import WithVuex from './examples/with-vuex/WithVuex.vue'

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
        },
        mixins: [],
        components: {
            WithoutVuex,
            WithVuex,
        },
    }
</script>

<style scoped lang="scss">

</style>