<template>
    <div id="que-7" class="block">
        <h3>
            Вопрос 7:  Для чего нужен $emit?
        </h3>
        <p>
            Нужен для отслеживания событие в дочернем компоненте.
            Пропс нельзя менять внизу. Поэтому нужно создать подписку на событие.

        </p>
        <div class="block__solution">
            <p>Тестовая ситуация: 
                <span>2</span> 
                компонента.
                <span>Родитель</span>
                с 
                <span>1</span>
                компонентом ребенком.
                Ребенок:
                <span>форма</span>
                с кнопкой для создания поста.
            </p>
            <div>
                <p>
                    Подписываемся на событие и передаем функцию обратного вызова, в нашем случае <span>createPost()</span>, добавляем событие:
                    <span>@create="createPost"</span>
                </p>
            </div>
            <div>
                Далее в ребенке генерируем событие:
                <p>
                    this.$emit(<span>'create'</span>, this.post);
                </p>
                <PostForm @create="createPost" />
            </div>
            <div>
                Далее для наглядности и теста выводим список:
                <ul 
                    v-for="(post, indexOfPost) in posts"
                    :key="indexOfPost"
                >
                    <li>
                        <div>
                            <strong>Название:</strong>{{post.title}}
                        </div>
                        <div>
                            <strong>Описание:</strong>{{post.body}}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import PostForm from './PostForm'

    export default {
        name: 'Que7Wrapper',
        data(){
            return {
                 posts: [
                    {id: 1, title: 'Дефолтный', body: 'Существует по умолчанию'},
                ],
                //list of posts
            }
        },
        components: {
            PostForm
        },
        methods: {
            createPost(post) {
                this.posts.push(post);
                //adding new post, post from child
            }
        }
    }
</script>

<style scoped lang="scss">

</style>