<template>
    <div id="que-18" class="block">
        <h3>
            Вопрос 18: Как отследить изменения поля объекта?
        </h3>
        <p>
            С помощью <span>watch: {}</span>,
            создаем по особому шаблону обращение к
            свойству объекта для отслеживания изменений 
            свойства объекта:<br>
            <pre>

               <span>watch:</span> {
                    <span>'user.address.street'</span>(newValue) {
                        return newValue;
                    }
                }
            </pre>
        </p>
        <div>
            <input v-model="user.address.street" type="text">
            <p>
                Значение: {{user.address.street}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Que18Wrapper',
        data(){
            return {
                user: {
                    name: 'Human Augusto',
                    address: {
                        street: 'Kudakovskogo'
                    }
                }
            }
        },
        watch: {
            'user.address.street'(newValue) {
                return newValue;
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
