<script>
import MainButton from './generics/MainButton.vue'
export default {
    name: 'AppJumbotron',
    components: { MainButton },
    props: {
        title: String,
        content: String,
        hasButton: Boolean,
        buttonLabel: String
    }
}
</script>

<template>
    <section class="jumbotron d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="row">
                <div class="col-5 m-auto text-center">
                    <h2>{{ title }}</h2>
                    <p class="content mb-4">{{ content }}</p>
                    <MainButton v-if="hasButton" :label="buttonLabel" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

.jumbotron {
    background-color: $lightgray;
    height: 500px;

    h2 {
        font-family: "Allison", cursive;
        font-size: 60px;
        color: $lightblue;
    }

    .content {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 32px;
    }

}
</style>