<template>
    <BaseForm
        text-button-submit="Avançar"
        @handleSubmit="validateForm();"
    >
        <InputField
            id="name"
            name="name"
            placeholder="Nome Completo"
            type="text"
            v-model="name"
            v-bind="getValidationField('name')"
            v-validate="'required'"
        />
        <PhoneField
            id="phone"
            name="phone"
            v-model="phone"
            v-bind="getValidationField('phone')"
            v-validate="getValidationPhone()"
        />
    </BaseForm>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapFields } from 'vuex-map-fields';

    import {
        BaseForm,
        BaseFormMixin,
        InputField,
        PhoneField
    } from '@components';

    export default {
        name: 'UserPersonalDataForm',
        components: {
            BaseForm,
            InputField,
            PhoneField
        },
        mixins: [
            BaseFormMixin
        ],
        computed: {
            ...mapFields([
                'user.name',
                'user.phone'
            ]),
        },
        methods: {
            async validateForm() {
                const isValid = await this.$validator.validateAll();

                if (isValid) {
                    this.$emit('handleSubmit');
                }
            }
        }
    }
</script>