<template>
    <div id="que-11" class="block">
        <h3>
            Вопрос 11: Особенности слежения за глубокими объектами.
        </h3>
        <p>
            В этом вопросе речь идет об изменениях полей объекта,
            вложенных объектов.
        </p>
        <div class="block__solution">
            <p>Смотри в консоль ===> </p>
            <input v-model="user.address.street" type="text">
            <section class="block__solution--flex-row">
                <div>
                    <p>
                        Слежение за глубокими объектами
                        реализуется путем обращения к объекту через метод
                        <span>handler</span> и свойство <span>deep</span>
                        внутри интересующего метода.
                    </p>
                </div>
                <div>
                    <pre>
                        <span>watch:</span> {<br>
                        &emsp;<span>user:</span> {<br>
                        &emsp;&emsp;<span>handler</span>(newValue) {<br>
                        &emsp;&emsp;&emsp;console.log(newValue);<br>
                        &emsp;&emsp;},<br>
                        &emsp;&emsp;deep: true <br>
                        &emsp;},<br>
                        },<br>
                    </pre>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Que11Wrapper',
        data(){
            return {
                user: {
                    name: 'Ivan',
                    address: {
                        street: 'Kudakovskogo',
                    }
                }
            }
        },
        components: {},
        methods: {},
        computed: {},
        watch: {
            user: {
                handler(newValue) {
                    console.log(newValue);
                },
                deep: true
            }
        },
    }
</script>

<style scoped lang="scss">
    .block {
        &__solution{
            &--flex-row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                & > div {
                   width: 50%; 

                   &:last-child {
                       margin-top: 20px;
                   }
                }
            }

        }
    }
</style>