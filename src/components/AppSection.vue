<script>
import SectionTitle from './generics/SectionTitle.vue';


export default {
    name: "AppSection",
    props: {
        type: String,
        title: String,
        subtitle: String,
        color: String,
        hasSectionTitle: Boolean,
        sectionTitle: String,
        sectionTitleSide: String
    },
    components: { SectionTitle }
}
</script>

<template>
    <section class="py-5" :class="[type, color]">
        <SectionTitle v-if="sectionTitle" :title="sectionTitle" :side="sectionTitleSide" />
        <div class="container">
            <div class="row text-center mb-5">
                <div class="col-5 m-auto text-center ">
                    <h2 class="section-title">{{ title }}</h2>
                    <h4 class="subtitle">{{ subtitle }}</h4>
                </div>
            </div>
            <slot></slot>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

h2.section-title {
    font-family: "Allison", cursive;
    font-size: 50px;
    color: $lightblue;
}

.subtitle {
    font-weight: bold;
    font-size: 28px;
}

section {
    background-repeat: no-repeat;

    &.secondary {
        background-color: $lightgray;
    }

    &.tertiary {
        background-color: $mediumgray;
    }
}


.coaching {
    background-image: url(../assets/img/artist-shape-01.png), url(../assets/img/maxcoach-shape-14.png), url(../assets/img/maxcoach-shape-13.png), url(../assets/img/maxcoach-shape-12.png), url(../assets/img/wave.svg);
    background-position: 0 10%, center 10%, 102% 10%, 63% 95%, 0 bottom, ;
}

.courses {
    background-image: url(../assets/img/artist-shape-01.png), url(../assets/img/artist-shape-01.png);
    background-position: -20% 50%, 120% 10%;
}

.articles {
    background-image: url(../assets/img/maxcoach-shape-14.png), url(../assets/img/maxcoach-shape-12.png);
    background-position: center center, 42% 30%;
}

.events {
    background-image: url(../assets/img/artist-shape-01.png), url(../assets/img/maxcoach-shape-13.png);
    background-position: -20% 120%, 102% 10%;
}
</style>