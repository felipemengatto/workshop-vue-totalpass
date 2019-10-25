<template >
    <button :class="['btn p-2 rounded-pill text-uppercase', classes]"
        v-bind="$attrs"
        :type="type"
        @click="$emit('click');"
    >
        <slot>
            {{ text }}
        </slot>
    </button>
</template>

<script>
    export default {
        name: 'BaseButton',
        inheritAttrs: false,
        props: {
            classes: {
                default: 'btn-primary btn-block',
                required: false,
                type: String
            },
            text: {
                default: '',
                required: false,
                type: String
            },
            type: {
                default: 'button',
                required: false,
                type: String
            }
        }
    }
</script>