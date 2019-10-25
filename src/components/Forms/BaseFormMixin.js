export default {
    methods: {
        getValidationField(fieldName) {
            return {
                'data-vv-as': fieldName,
                'class': { 'is-invalid': this.errors.has(fieldName) },
            }
        },
        getValidationPhone() {
            return {
                required: true,
                regex: /(\([1-9][0-9]\)?|[1-9][0-9])\s?([9]{1})?([0-9]{4})-?([0-9]{4})$/
            }
        },
    }
};