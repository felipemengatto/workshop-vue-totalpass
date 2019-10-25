<template>
    <input
        :id="id"
        :name="name"
        :placeholder="placeholder"
        class="form-control"
        type="tel"
        v-mask="['(##) #####-####', '(##) ####-####']"
        :value="value"
        @input="$emit('input', $event.target.value);"
    />
</template>

<script>
    export default {
        name: 'PhoneField',
        props: {
            id: {
                required: true,
                type: String
            },
            name: {
                required: true,
                type: String
            },
            placeholder: {
                default: 'Celular',
                required: false,
                type: String
            },
            value: {
                required: true
            }
        }
    }
</script>