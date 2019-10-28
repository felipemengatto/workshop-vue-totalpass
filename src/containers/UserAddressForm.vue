<template>
    <BaseForm
        text-button-submit="Avançar"
        @handleSubmit="$emit('handleSubmit')"
    >
        <ZipCodeField
            id="zipCode"
            name="zipCode"
            v-model="zipCode"
            v-bind="getValidationField('zipCode')"
            v-validate="'required'"
            @change="findAddressByCep(zipCode);"
        />
        <InputField
            id="street"
            name="street"
            placeholder="Rua"
            type="text"
            v-model="street"
            v-bind="getValidationField('street')"
            v-validate="'required'"
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
        ZipCodeField
    } from '@components';

    export default {
        name: 'UserAddressForm',
        components: {
            BaseForm,
            InputField,
            ZipCodeField
        },
        mixins: [
            BaseFormMixin
        ],
        computed: {
            ...mapFields([
                'user.address.street',
                'user.address.zipCode',
            ])
        },
        methods: {
           ...mapActions([
               'findAddressByCep'
           ])
        }
    }
</script>