<template>
    <div class="space-block"></div>
    <div class="page">
       <form @keyup="validateForm">
        <h1 class="form-header">Login</h1>
        <FormGroup
            type="text"
            id="email"
            label="Email"
            :input="email"
            errorMessage="Please enter a valid email address."
        />
        <FormGroup
            type="text"
            id="password"
            label="Password"
            :input="password"
            errorMessage="Password cannot be empty."
        />
       </form> 
    </div>
</template>

<script>
import { LoginService } from '@/services/LoginService';
import { FormInput } from '@/utils/FormInput';
import { FormValidators } from '@/utils/FormValidators';
import FormGroup from '@/components/FormGroup.vue';

const loginService = new LoginService();

export default {
    name: 'Login',
    data() {
        return {
            email: new FormInput('email', [FormValidators.validEmail, FormValidators.notEmpty]), 
            password: new FormInput('password', [FormValidators.notEmpty]), 
            isValidForm: false,
            isRemembered: false,
            isSubmitting: false,
        }
    },
    components: {
        FormGroup
    },
    computed: {
        emailValue() {
            return this.email.value;
        },
        passwordValue() {
            return this.password.value;
        }
    },
    watch: {
        emailValue(value) {
            this.email.validate(value);
        },
        passwordValue(value) {
            this.password.validate(value);
        },
    },
    methods: {
        validateForm() {
            this.isValidForm = FormValidators.validForm([this.email, this.password]);
        },
        async onSubmit() {
            this.isSubmitting = true;
            const loginResponse = await loginService.login(this.email, this.password);
            this.isSubmitting = false;

            if (loginResponse.status !== 200) {
                // TODO set toast notification
                return 
            }

            // TODO navigate to dashboard

        }
    }

}
</script>

<style scoped>
    
.button-group {
    position: relative;
    top: 1em;
}
</style>
