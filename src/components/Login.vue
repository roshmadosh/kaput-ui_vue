<template>
    <div class="space-block"></div>
    <div class="page">
       <form>
        <div class="form-group text-group">
            <label for="email">Email</label>
            <input type="text" required v-model="email"/>
        </div>
        <div class="form-group text-group">
            <label for="password">Password</label>
            <input type="password" required v-model="password"/>
        </div>
        <div class="form-group">
            <a href="#">Not a user? Register here.</a>
        </div>
        <div class="form-group checkbox-group">
            <input type="checkbox" name="remember-me" id="remember-me" v-model="isRemembered">
            <label for="remember-me">Remember me</label>
        </div>
        <div class="form-group button-group">
            <button type="submit" @click.prevent="onSubmit">Login</button>
        </div>
       </form> 
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            isRemembered: false,
        }
    },
    methods: {
        onSubmit() {
            console.log(this.email, this.password, this.isRemembered);
        }
    }

}
</script>

<style scoped>
.space-block {
    height: 4em;
}

form {
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 6em;
    padding: 3em 5em;
    margin: auto;
    width: fit-content;
}    

.form-group {
    margin-bottom: 2rem;
}

.text-group {
    display: flex;
    flex-direction: column;
    width: 32ch;
}

.checkbox-group > label {
    position: relative;
    bottom: 2px;
}

.button-group {
    position: relative;
    top: 1em;
}
</style>