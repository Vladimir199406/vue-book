<template>
    <div id="que-17" class="block">
        <div>
            <span>
                {{responseType}}
            </span>
        </div>
        <div>
            {{testNativeRequest}}
        </div>
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
                postsWithoutVuex: [],
                xhr: XMLHttpRequest,
                responseType: '',

                testNativeRequest: []
            }
        },
        async mounted() {

            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
            this.postsWithoutVuex = await response.json();

            this.responseType =  await response.headers.get('Content-Type');


            this.xhr = new XMLHttpRequest();     
            this.xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts?_limit=10');    
            this.xhr.send();
            this.xhr.onload = () => {
                if (this.xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
                    console.log(`Ошибка ${this.xhr.status}: ${this.xhr.statusText}`); // Например, 404: Not Found
                } else { // если всё прошло гладко, выводим результат
                    console.log(`Готово, получили ${this.xhr.response.length} байт`); // response -- это ответ сервера
                    this.testNativeRequest = this.xhr.response;
                }
            };


        },
        beforeUpdate() {
            console.log("TEST-ALL-HEADERS", this.responseType);
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