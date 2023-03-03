<template>
<div :class="`form-group ${type}-group`">
    <label :for="id">{{ label }}</label>
    <input 
        :type="type" 
        :id="id" 
        v-model="input.value"
        @blur="input.isTouched = true">
    <p class="error-message" v-show="input.isTouched && !input.isValid">{{  errorMessage  }}</p>
</div>

</template>


<script>
export default {
    name: 'FormGroup',
    props: ['type', 'id', 'label', 'input', 'errorMessage'],
    data() {
        return {
        }
    },
}
</script>