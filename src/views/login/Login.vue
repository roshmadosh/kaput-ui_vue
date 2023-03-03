<template>
    <div class="space-block"></div>
    <div class="page">
       <form>
        <h1 class="form-header">Login</h1>
        <div class="form-group text-group">
            <label for="email">Email</label>
            <input type="text" required v-model="email"/>
        </div>
        <div class="form-group text-group">
            <label for="password">Password</label>
            <input type="password" required v-model="password"/>
        </div>
        <div class="form-group">
            <router-link :to="{ name: 'Register' }">Not a user? Register here.</router-link>
        </div>
        <div class="form-group checkbox-group">
            <input type="checkbox" name="remember-me" id="remember-me" v-model="isRemembered">
            <label for="remember-me">Remember me</label>
        </div>
        <div class="form-group button-group">
            <button type="submit" :disabled="isSubmitting" @click.prevent="onSubmit">Login</button>
        </div>
       </form> 
    </div>
</template>

<script>
import { LoginService } from '@/services/LoginService';

const loginService = new LoginService();

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            isRemembered: false,
            isSubmitting: false,
        }
    },
    methods: {
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