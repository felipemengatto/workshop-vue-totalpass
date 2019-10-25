<template>
    <input
        :id="id"
        :name="name"
        class="form-control"
        :placeholder="placeholder"
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value);"
    />
</template>

<script>
    export default {
        name: 'InputField',
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
                default: '',
                required: false,
                type: String
            },
            type: {
                default: 'text',
                required: false,
                type: String
            },
            value: {
                required: true
            }
        }
    }
</script>