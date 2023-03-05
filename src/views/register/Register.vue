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
                id="email"
                label="Email"
                :input="email"
                errorMessage="Please enter a valid email address."
            />
            <FormGroup
                type="text"
                id="email"
                label="Email"
                :input="email"
                errorMessage="Please enter a valid email address."
            />
            <div class="form-group text-group">
                <label for="password">Password</label>
                <input 
                    type="text" 
                    id="password" 
                    @blur="password.isTouched = true" 
                    v-model="password.value">
                <p class="error-message" v-show="password.isTouched && !password.isValid">Password cannot be empty.</p>
            </div>
            <div class="form-group text-group">
                <label for="firstName">First Name</label>
                <input type="text" required name="firstName" id="firstName">
            </div>
            <div class="form-group text-group">
                <label for="lastName">Last Name</label>
                <input type="text" required name="lastName" id="lastName">
            </div>
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
            email: new FormInput("email"),
            password: new FormInput("password"),
            isValidForm: false,
        }
    },
    methods: {
        validateForm() {
            this.isValidForm = FormValidators.validForm([this.email, this.password]);
        },
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
