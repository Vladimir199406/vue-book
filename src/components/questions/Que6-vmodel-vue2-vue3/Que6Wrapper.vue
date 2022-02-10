<template>
    <div id="que-6" class="block">
        <h3>
            Вопрос 6: Особенности использования v-model во Vue2 и Vue3?
            <div class="block__table">
                <div class="block__table-column">
                    <p class="block__table-column--header">Vue2</p>
                    <div class="block__table-column--content">
                            <p class="table-text-wrapper__text">
                                v-model <span>ТОЛЬКО</span> 1
                            </p>
                            <p class="table-text-wrapper__text">
                                v-model === <span>value</span>
                            </p>
                            <p class="table-text-wrapper__text">
                                Событие: <span>onInput()</span>
                            </p>
                            <p class="table-text-wrapper__text">
                                В доч комп: this.$emit(<span>'input'</span>, newValue)
                            </p>
                    </div>
                </div>
                <div class="block__table-column">
                    <p class="block__table-column--header">Vue3</p>
                    <div class="block__table-column--content">
                            <p class="table-text-wrapper__text">
                                v-model <span>>=</span> 1
                            </p>
                            <p class="table-text-wrapper__text">
                                v-model === <span>modelValue</span> или
                            </p>
                            <p class="table-text-wrapper__text">v-model:<span>atributName</span></p>
                            <p class="table-text-wrapper__text">
                                В доч комп: this.$emit(<span>'update:attributeName'</span>, newValue)
                            </p>
                            <p class="table-text-wrapper__text">
                                В доч комп по умолчанию: this.$emit(<span>'update:modelValue'</span>, newValue)
                            </p>
                    </div>
                </div>
            </div>
        </h3>
    </div>
</template>

<script>
    export default {
        name: 'Que6Wrapper',
        data(){
            return {}
        },
        components: {}
    }
</script>

<style scoped lang="scss">
    .block {

        &__table {
            margin-top: 30px;
            width: 100%;
            display: unset;
            border: none;
            border-radius: 5px;
        }

        &__table-column:first-child {
            border-right: none;
        }

        &__table-column {
            display: flex;
            flex-direction: column;
            width: 100%;

            &--header {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            &--content {
                display: flex;
                align-items: flex-start;  
                flex-direction: column;

                .table-text-wrapper {
                    width: 100%;
                    text-align: left;
                    border-top: 1px solid black;

                    &__text {
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        padding-left: 20px;
                        font-size: 16px;
                        font-weight: 400;
                        text-align: initial;
                    }

                }

            }
        }
    }

    @media screen and (min-width: 768px) {
        .block {
            &__table {
                display: flex;
                border: 1px solid black;
            }

            &__table-column:first-child {
                border-right: 1px solid black;
            }
        }
    }
</style>