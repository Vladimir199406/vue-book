<template>
    <div id="que-19" class="block">
        <h3>
            Вопрос 19: Хуки жизненного цикла VUE.
        </h3>
        <p>
            <strong> 
                <span>beforeCreate:</span><br><br> 
            </strong>
            Хук beforeCreate запускается в начале инициализации компонента. Данные не сделаны реактивными, а события еще не настроены.
            <pre>
                <br><br>
                <span>export default</span> {
                   beforeCreate() {
                      <span>console.log</span>('Я появляюсь в хуке beforeCreate()')
                    }
                }
            </pre>
            <br>
            <br>
            <strong>Смотри в консоль ---> </strong>
        </p>
        <p>
            <strong> 
                <span>created:</span><br><br> 
            </strong>
            Вы можете получить доступ к реактивным данным и активным событиям с помощью хука created. 
            Шаблоны и виртуальная модель DOM еще не смонтированы, и их рендеринг не выполнен
            <pre>
                <br><br>
                <span>export default</span> {

                    data() {
                        return {
                        property: 'Example property.'
                        }
                    },

                    computed: {
                        propertyComputed() {
                        return this.property
                        }
                    },

                    created() {
                        console.log('At this point, this.property is now reactive and propertyComputed will update.')
                        this.property = 'Example property updated.'
                    }
                }
                
            </pre>
            <br>
            <br>
            Computed свойство: {{ propertyComputed }}
            <br>
            <br>
            <strong>Смотри в консоль ---> </strong>
        </p>
        <p>
            <strong> 
                <span>beforeMount:</span><br><br> 
            </strong>
            Хуки монтирования используются чаще всего. 
            Они обеспечивают мгновенный доступ к компоненту до и после первого рендеринг. 
            Однако они не выполняются во время рендеринга на стороне сервера.
            <br><br>
            Используйте хуки монтирования, если вам требуется получить доступ или изменить 
            DOM вашего компонента непосредственно до или после начального рендеринга.
            <br><br>
            Не используйте хуки монтирования, если вам требуется доставить 
            данные компонента при инициализации.
            <br><br>
            Примечание. Используйте для этой цели created (или created и activated для компонентов keep-alive). 
            В частности, если вам нужны эти данные при рендеринге на стороне сервера.
            <br><br>
            Хук beforeMount запускается до начального рендеринга и после компиляции шаблона или функций рендеринга.
            <pre>
                <br><br>
                <span>export default</span> {
                    beforeMount() {
                        console.log(`At this point, vm.$el has not been created yet.`)
                    }
                }
                
            </pre>
            <br>
            <br>
            <strong>Смотри в консоль ---> </strong>
        </p>
        <p>
            <strong> 
                <span>mounted:</span><br><br> 
            </strong>
            В хуке mounted hook дает вам полный доступ к реактивному компоненту, 
            шаблонам и модели DOM после рендеринга (через this.$el).
            <br><br>
            Используйте mounted для модификации DOM, 
            особенно при интеграции с другими библиотеками, кроме Vue:
            <pre>
                <br><br>
                <span>export default</span> {
                    mounted() {
                        console.log(`At this point, vm.$el has been created and el has been replaced.`);
                        console.log(this.$el.textContent) // Example component.
                    }
                } 
            </pre>
            <br>
            <br>
            <strong>Смотри в консоль ---> </strong>
        </p>
    </div>
</template>

<script>
    export default {

        name: 'Que19Wrapper',

        data(){
            return {
                property: 'Example property'
            }
        },

        computed: {
            propertyComputed() {
                return this.property;
            }
        },

        beforeCreate() {
            console.log('Я появляюсь в хуке beforeCreate()')
        },
        
        created() {
            console.log('Я появляюсь в хуке "created" At this point, this.property is now reactive and propertyComputed will update.')
            this.property = 'Example property updated.'
        },

        beforeMount() {
            console.log(`At this point, vm.$el has not been created yet.`)
        },

        mounted() {
            console.log(`At this point, vm.$el has been created and el has been replaced.`);
            console.log(this.$el.textContent) // Example component.
        }
    }
</script>

<style scoped lang="scss">

</style>
