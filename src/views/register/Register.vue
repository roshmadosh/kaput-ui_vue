<template>
    <div class="space-block"></div>
    <div id="register-form" class="page">
        <form @keyup="validateForm">
            <h1 class="form-header">Register</h1>
            <div class="form-group text-group">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" v-model="email.value">
            </div>
            <div class="form-group text-group">
                <label for="password">Password</label>
                <input type="text" name="password" id="password" v-model="password.value">
            </div>
            <div class="form-group text-group">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName">
            </div>
            <div class="form-group text-group">
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName">
            </div>
            <div class="form-group button-group">
                <button type="submit" :disabled="!isFormValid">Register</button>
                <router-link to='/login'><button>Cancel</button></router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { FormValidators } from '@/utils/FormValidators.js';
import { FormInput } from '@/utils/FormInput';

export default {
    name: "Register",
    data() {
        return {
            email: new FormInput("email"),
            password: new FormInput("password"),
            isFormValid: false,
        }
    },
    methods: {
        validateForm() {
            const formFields = [this.email, this.password];

            // checks if every field is valid
            this.isFormValid = formFields.map(field => field.isValid).every(bool => bool);
        } 
    },
    computed: {
        // required in order to watch a nested field. kinda gross
        emailValue() {
            return this.email.value;
        },
        passwordValue() {
            return this.password.value;
        }
    },
    watch: {
        emailValue(value) {
            this.email.isValid = FormValidators.validEmail(value);
        },
        passwordValue(value) {
            this.password.isValid = FormValidators.validPassword(value);
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
