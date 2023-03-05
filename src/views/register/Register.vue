<template>
    <div class="space-block"></div>
    <div id="register-form" class="page">
        <form @keyup="validateForm">
            <h1 class="form-header">Register</h1>
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
            <FormGroup
                type="text"
                id="firstName"
                label="First Name"
                :input="firstName"
                errorMessage="First name cannot be empty."
            />
            <FormGroup
                type="text"
                id="lastName"
                label="Last Name"
                :input="lastName"
                errorMessage="Last name cannot be empty."
            />
            
            <div class="form-group button-group">
                <button type="submit" :disabled="!isValidForm">Register</button>
                <router-link to='/login'><button>Cancel</button></router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { FormValidators } from '@/utils/FormValidators.js';
import { FormInput } from '@/utils/FormInput';
import FormGroup from '@/components/FormGroup.vue'

export default {
    name: "Register",
    components: {
        FormGroup,
    },
    data() {
        return {
            email: new FormInput("email", [FormValidators.validEmail, FormValidators.notEmpty]),
            password: new FormInput("password", [FormValidators.notEmpty]),
            firstName: new FormInput("firstName", [FormValidators.notEmpty]),
            lastName: new FormInput("lastName", [FormValidators.notEmpty]),
            isValidForm: false,
        }
    },
    methods: {
        validateForm() {
            this.isValidForm = FormValidators.validForm([this.email, this.password, this.firstName, this.lastName]);
        },
    },
    computed: {
        // required in order to watch a nested field. kinda gross
        emailValue() {
            return this.email.value;
        },
        passwordValue() {
            return this.password.value;
        },
        firstNameValue() {
            return this.firstName.value;
        },
        lastNameValue() {
            return this.lastName.value;
        },
    },
    watch: {
        emailValue(value) {
            this.email.validate(value);
        },
        passwordValue(value) {
            this.password.validate(value);
        },
        firstNameValue(value) {
            this.firstName.validate(value);
        },
        lastNameValue(value) {
            this.lastName.validate(value);
        }
    }
}
</script>

<style scoped>
#register-form .button-group button {
    position: relative;
    top: 1em;
    margin-right: 20px;
}

</style>
