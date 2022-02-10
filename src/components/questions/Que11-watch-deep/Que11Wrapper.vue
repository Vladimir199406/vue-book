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
            <section class="block__solution--flex">
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
                        <span>watch:</span> {
                        &emsp;<span>user:</span> {
                        &emsp;&emsp;<span>handler</span>(newValue) {
                        &emsp;&emsp;&emsp;console.log(newValue);
                        &emsp;&emsp;},
                        &emsp;&emsp;deep: true 
                        &emsp;},
                        },
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
            &--flex {
                display: flex;
                width: 100%;
                flex-direction: column;

                & > div {
                   width: 100%; 

                   &:last-child {
                       margin-top: 20px;
                   }
                }
            }

        }
    }

    @media screen and (min-width: 768px) {
        .block__solution--flex {
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

    @media screen and (min-width: 1280px) {

    }

</style>