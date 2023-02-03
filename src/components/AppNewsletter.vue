<script>
import AppForm from './generics/AppForm.vue';

export default {
    name: "AppNewsletter",
    components: { AppForm },
    emits: ['update-email', 'newsletter-form-sent']
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
                    <AppForm type="email" placeholder="Your e-mail" buttonLabel="&rarr;"
                        @update-field="$emit('update-email', $event)" @send-form="$emit('newsletter-form-sent')" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

.newsletter {
    background-color: $darkblue;
    background-image: url(../assets/img/artist-shape-color-paint-top-left.png), url(../assets/img/artist-shape-color-paint-bottom-right.png);
    background-position: left, right;
    background-repeat: no-repeat;
    color: white;
}
</style>