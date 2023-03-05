<template>
    <div class="space-block"></div>
    <div class="page">
       <form @keyup="validateForm">
        <h1 class="form-header">Login</h1>
        <div class="form-group text-group">
            <label for="email">Email</label>
            <input type="text" id='email' @blur="email.isTouched = true" v-model="email.value"/>
            <p class="error-message" v-show="email.isTouched && !email.isValid">Please enter a valid email address.</p>
        </div>
        <div class="form-group text-group">
            <label for="password">Password</label>
            <input type="password" id='password' @blur="password.isTouched = true" v-model="password.value"/>
            <p class="error-message" v-show="password.isTouched && !password.isValid">Password cannot be empty.</p>
        </div>
        <div class="form-group">
            <router-link :to="{ name: 'Register' }">Not a user? Register here.</router-link>
        </div>
        <div class="form-group checkbox-group">
            <input type="checkbox" name="remember-me" id="remember-me" v-model="isRemembered">
            <label for="remember-me">Remember me</label>
        </div>
        <div class="form-group button-group">
            <button type="submit" :disabled="isSubmitting || !isValidForm" @click.prevent="onSubmit">Login</button>
        </div>
       </form> 
    </div>
</template>

<script>
import { LoginService } from '@/services/LoginService';
import { FormInput } from '@/utils/FormInput';
import { FormValidators } from '@/utils/FormValidators';
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
