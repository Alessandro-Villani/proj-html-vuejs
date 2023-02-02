<script>
export default {
    name: 'AppForm',
    data() {
        return {
            inputField: '',
        }
    },
    props: {
        type: String,
        placeholder: String,
        buttonLabel: String
    },
    emits: ['send-form', 'update-field'],
    methods: {
        //Function resetting input field and sending emit
        sendForm() {
            this.inputField = '';
            this.$emit('send-form')
        }
    }
}
</script>

<template>
    <form class="w-100 px-5" @submit.prevent="sendForm">
        <div class="input-group mb-3">
            <input v-model="inputField" :type="type" class="form-control" :placeholder="placeholder"
                @keyup="$emit('update-field', inputField)">
            <button class="form-button">{{ buttonLabel }}</button>
        </div>
    </form>
</template>

<style scoped lang="scss">
form .form-control {
    background-color: transparent;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    font-size: 28px;

    &::placeholder {
        color: white;
        font-size: 28px;
    }

    &:focus {
        box-shadow: none;
    }
}

.form-button {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    font-size: 32px;
}
</style>