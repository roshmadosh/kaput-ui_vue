<template>
    <div id="register-form" class="page">
        <form>
            <h1 class="form-header">Register</h1>
            <div class="form-group text-group">
                <label for="email">Email</label>
                <input type="text" name="email" id="email">
            </div>
            <div class="form-group text-group">
                <label for="password">Password</label>
                <input type="text" name="password" id="password">
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
                <button type="submit">Register</button>
                <button>Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {

        }
    },
}
</script>

<style scoped>
#register-form .button-group button {
    position: relative;
    top: 1em;
    margin-right: 20px;
}

</style>