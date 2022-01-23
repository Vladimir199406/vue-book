<template>
    <div class="block__solution">
        <StaticPartWithout/>
        <div class="block__articles-wrapper articles-wrapper">
            <div class="articles-wrapper__article" v-for="post in postsWithoutVuex" :key="post.id">
                <h5>{{post.title}}</h5>
                <p>{{post.body}}</p>
            </div>
        </div>
    </div>
</template>

<script>

    import StaticPartWithout from './StaticPartWithout.vue'

    export default {
        name: 'WithoutVuex',
        props: [
            'postsWithoutVuex',
        ],
        components: {
            StaticPartWithout
        }
    }
</script>

<style scoped lang="scss">

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
            }
        }
    }
</style>