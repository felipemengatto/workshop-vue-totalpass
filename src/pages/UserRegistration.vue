<template>
    <div class="h-100">
        <Wizard>
            <WizardItem
                :back-button="false"
                title="Wizard"
                subtitle="Step 1"
            >
                <UserPersonalDataForm
                    @handleSubmit="nextWizard"
                />
            </WizardItem>
            <WizardItem
                title="Wizard"
                subtitle="Step 2"
            >
                <UserAddressForm
                    @handleSubmit="nextWizard"
                />
            </WizardItem>
            <WizardItem
                title="Wizard"
                subtitle="Step 3"
            >
                <UserRegistrationCompleted />
            </WizardItem>
        </Wizard>
    </div>
</template>

<script>
    import { UserPersonalDataForm, UserAddressForm, UserRegistrationCompleted } from '@containers';

    export default {
        name: 'UserRegistration',
        components: {
            UserPersonalDataForm,
            UserAddressForm,
            UserRegistrationCompleted
        },
        methods: {
            nextWizard() {
                this.$emit('wizard:next');
            }
        }
    }
</script>