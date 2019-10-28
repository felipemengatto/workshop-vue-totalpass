<template>
    <input
        :id="id"
        :name="name"
        :placeholder="placeholder"
        type="text"
        v-mask="['#####-###']"
        :value="value"
        @change="$emit('change', $event.target.value);"
        @input="$emit('input', $event.target.value);"
        class="form-control"
    >
</template>

<script>
    export default {
        name: 'ZipCodeField',
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
                default: 'CEP',
                required: false,
                type: String
            },
            value: {
                required: true
            }
        }
    }
</script>