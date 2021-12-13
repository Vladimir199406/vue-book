<template>
    <form @submit.prevent>
        <p>Создание поста</p>
        <input
            v-model="post.title"
            type="text"
            placeholder="post.title"
        >
        <input
            v-model="post.body"
            type="text"
            placeholder="post.body"
        >
        <button @click="createPost">
            Нажми и создай пост
        </button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                this.post.id = Date.now();
                //creates id: it is usefull if we want to delete post
                this.$emit('create', this.post)
                //takes method from parent comp: id of method 'create' and it takes 'post' as a second param
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
