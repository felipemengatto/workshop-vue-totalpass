<template>
    <form class="card bg-transparent border-0 py-3 px-4"
        name="form"
        @submit.prevent
        novalidate
    >
        <div class="card-body p-0">
            <h4 class="text-center text-dark mb-3" v-if="title">
                {{ title }}
            </h4>
            <slot></slot>
            <div class="form-row m-0 border-0">
                <div class="col-12 p-0 my-3">
                    <BaseButton
                        @click="$emit('handleSubmit');"
                    >
                        {{ textButtonSubmit }}
                    </BaseButton>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import { BaseButton } from '@components';

    export default {
        name: 'BaseForm',
        components: {
            BaseButton
        },
        props: {
            textButtonSubmit: {
                default: 'Salvar',
                required: false,
                type: String
            },
            title: {
                default: '',
                required: false,
                type: String
            }
        }
    }
</script>