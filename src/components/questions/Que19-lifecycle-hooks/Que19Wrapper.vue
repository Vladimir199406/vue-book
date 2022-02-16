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
        <p>
            <strong> 
                <span>beforeUpdate:</span><br><br> 
            </strong>
                Хук beforeUpdate запускается после изменения данных вашего компонента 
                и начала цикла обновления и до исправления и повторного рендеринга модели DOM. 
                <br><br>
                Используйте beforeUpdate, если вам нужно получить новое состояние любых 
                реактивных данных вашего компонента до фактического рендеринга.
                <br><br>
            <pre>
                <br><br>
                <span>export default</span> {
                    data() {
                        return {
                        counterBeforeUpdate: 0
                        }
                    },

                    created() {
                        setInterval(() => {
                        this.counterBeforeUpdate++
                        }, 1000)
                    },

                    beforeUpdate() {
                        console.log(`BEFORE-UPDATE: At this point, Virtual DOM has not re-rendered or patched yet.`)
                        // Logs the counterBeforeUpdate value every second, before the DOM updates.
                        console.log(this.counterBeforeUpdate)
                    }
                } 
            </pre>
            <br>
            <br>
                Вначале этот код сохраняет counter со значением <span>0</span>. 
                Когда запускается хук created, он инкрементально увеличивает <span>{{counterBeforeUpdate}}</span>
                значение counterBeforeUpdate каждые <span>1000</span> мс. При запуске хука beforeUpdate 
                этот код регистрирует сообщение: At this point, Virtual DOM has 
                not re-rendered or patched yet. и регистрирует числовое значение counter.
                <br>
                <br>
            <strong>Смотри в консоль ---> </strong>
        </p>
        <p>
            <strong> 
                <span>updated:</span><br><br> 
            </strong>
                Хук updated запускается после изменения данных вашего компонента 
                и повторного рендеринга DOM.
                <br><br>
                Используйте updated, если вам требуется доступ к DOM после изменения свойства:
                <br><br>
            <pre>
                <br><br>
                <span>export default</span> {
                    data() {
                        return {
                        counterUpdated: 0
                        }
                    },

                    created() {
                        setInterval(() => {
                        this.counterUpdated++
                        }, 1000)
                    },

                    updated() {
                        console.log(`UPDATED: At this point, Virtual DOM has re-rendered and patched.`)
                    }
                } 
            </pre>
            <br>
            <br>
                Вначале этот код сохраняет counterUpdated со значением <span>0</span>. 
                Когда запускается хук created, он инкрементально увеличивает <span ref="updated-element">{{counterUpdated}}</span>
                значение counterUpdated каждые <span>1000</span> мс. При запуске хука updated 
                этот код регистрирует сообщение: At this point, Virtual DOM has 
                re-rendered and patched.
                <br>
                <br>
            <strong>Смотри в консоль ---> </strong>
        </p>
        <p>
            <strong> 
                <span>beforeDestroy:</span><br><br> 
            </strong>
                beforeDestroy срабатывает прямо перед уничтожением. 
                Ваш компонент все еще присутствует и полностью функционален.
                <br><br>
                Используйте beforeDestroy, если вам нужно 
                очистить события или реактивные подписки.
                <br><br>
            <pre>
                <br><br>
                <span>export default</span> {
                    data() {
                        return {
                        exampleLeakyProperty: 'This represents a property that will leak memory if not cleaned up.'
                        }
                    },

                    beforeDestroy() {
                        console.log(`At this point, watchers, child components, and event listeners have not been teared down yet.`)
                        // Perform the teardown procedure for exampleLeakyProperty.
                        // (In this case, effectively nothing)
                        this.exampleLeakyProperty = null
                        delete this.exampleLeakyProperty
                    }
                } 
            </pre>
            <br>
            <br>
                Этот код вначале сохраняет exampleLeakyProperty. 
                При запуске хука beforeDestroy код регистрирует сообщение 
                At this point, watchers, child components, and event listeners 
                have not been torn down yet. и удаляет свойство exampleLeakyProperty
                <br>
                <br>
                exampleLeakyProperty: <span>{{exampleLeakyProperty}}</span>
                <br>
                <br>
            <strong>Смотри в консоль ---> </strong>
        </p>
        <p>
            <strong> 
                <span>destroyed:</span><br><br> 
            </strong>
                Когда вы достигнете хука destroyed, 
                от вашего компонента уже практически ничего не останется. 
                Все, что было к нему прикреплено, будет уничтожено.
                <br><br>
                Используйте destroyed, если вам необходимо 
                провести заключительную очистку или сообщить 
                удаленному серверу об уничтожении компонента.
        </p>
        <p>
            <strong> 
                <span>activated и deactivated:</span><br><br> 
            </strong>
                Также имеется два других хука, activated и deactivated. 
                <br><br>
                Достаточно сказать, что они позволяют определит, 
                когда компонент внутри тега <span>keep-alive</span>
                включается и выключается. Вы можете использовать их для 
                доставки данных для вашего компонента или обработки изменений 
                состояния, в результате чего они будут вести себя как created 
                и beforeDestroy без необходимости полной перестройки компонентов.
        </p>
        <strong> СМОТРИ раздел "Продвинутые вопросы !" </strong>
    </div>
</template>

<script>
    export default {

        name: 'Que19Wrapper',

        data(){
            return {
                property: 'Example property',
                counterBeforeUpdate: 0,
                counterUpdated: 0,
                exampleLeakyProperty: 'This represents a property that will leak memory if not cleaned up.'
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
            
            setInterval(() => {
                if (this.counterBeforeUpdate !== 10) {
                    this.counterBeforeUpdate++
                } else {
                    return;
                }
            }, 1000),

            setInterval(() => {
                if (this.counterUpdated !== 10) {
                    this.counterUpdated++
                } else {
                    return;
                }
            }, 1000)

        },

        beforeMount() {
            console.log(`At this point, vm.$el has not been created yet.`)
        },

        mounted() {
            console.log(`At this point, vm.$el has been created and el has been replaced.`);
            //console.log(this.$el.textContent) // Example component console all data in comp.
        },

        
        beforeUpdate() {
            console.log(`BEFORE-UPDATE: At this point, Virtual DOM has NOT re-rendered or patched yet.`, this.counterBeforeUpdate)
            // Logs the counterBeforeUpdate value every second, before the DOM updates.
        },

        updated() {
            console.log(`UPDATED: At this point, Virtual DOM has re-rendered and patched.`, this.counterUpdated)
        },

        beforeDestroy() {
            console.log(`BEFORE-DESTROY: At this point, watchers, child components, and event listeners have not been teared down yet.`)
            // Perform the teardown procedure for exampleLeakyProperty.
            // (In this case, effectively nothing)
            this.exampleLeakyProperty = null
            delete this.exampleLeakyProperty
        }
    }
</script>

<style scoped lang="scss">

</style>
