<script>
import AppForm from './generics/AppForm.vue';

export default {
    name: "AppNewsletter",
    data() {
        return {
            email: ''
        }
    },
    components: { AppForm },
    methods: {
        updateEmail(email) {
            this.email = email;
        },
        formSent() {
            console.log('form sent')
        }
    }
}
</script>

<template>
    <section class="newsletter p-5">
        <div class="container">
            <div class="row">
                <div class="col-3 text-end">
                    <h2>Newsletter to get in touch</h2>
                </div>
                <div class="col-9 d-flex align-items-center justify-content-center">
                    <AppForm type="email" placeholder="Your e-mail" buttonLabel="&rarr;" @update-field="updateEmail"
                        @send-form="formSent" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

.newsletter {
    background-color: $darkblue;
    color: white;
}
</style>