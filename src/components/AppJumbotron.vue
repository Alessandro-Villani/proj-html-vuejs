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
    },
    emits: ['jumbotron-button-click']
}
</script>

<template>
    <section class="jumbotron d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="row">
                <div class="col-5 m-auto text-center">
                    <h2>{{ title }}</h2>
                    <p class="content mb-4">{{ content }}</p>
                    <MainButton v-if="hasButton" :label="buttonLabel" @button-click="$emit('jumbotron-button-click')" />
                </div>
            </div>
        </div>
        <img id="bg-1" src="../assets/img/artist-hero-image-02-232x300.jpg" alt="hero-img-02">
        <img id="bg-2" src="../assets/img/artist-hero-image-01.jpg" alt="hero-img-01">
        <img id="bg-3" src="../assets/img/artist-hero-image-04-235x300.jpg" alt="hero-img-03">
    </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

.jumbotron {
    background-image: url(../assets/img/artist-shape-02-600x324.png), url(../assets/img/artist-shape-03-201x300.png), url(../assets/img/artist-hero-image-03-204x300.png), url(../assets/img/artist-shape-01.png), url(../assets/img/artist-shape-04-127x300.png), url(../assets/img/artist-shape-05-300x198.png), url(../assets/img/maxcoach-shape-12-150x150.png);
    background-position: 0 0, 30px, 15% 80%, 90%, 95% 10%, 85% 80%, 80% 85%;
    background-repeat: no-repeat;
    background-color: $lightgray;
    height: 600px;
    position: relative;

    img {
        position: absolute;
        box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.4);

        &#bg-1 {
            top: 10%;
            left: 10%;
        }

        &#bg-2 {
            bottom: 5%;
            left: 3%;
        }

        &#bg-3 {
            bottom: 15%;
            right: 15%;
        }
    }

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