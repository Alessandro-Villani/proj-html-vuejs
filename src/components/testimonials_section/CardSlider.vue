<script>
import TestimonialCard from './TestimonialCard.vue';

export default {
    name: "CardSlider",
    props: {
        cardsData: Array
    },
    components: { TestimonialCard }
}
</script>

<template>
    <div class="cards-row row row-cols-3 mb-5 flex-nowrap">
        <TestimonialCard v-for="(card, i) in cardsData" :key="i" :testimonialData="card" />
    </div>
    <div class="row">
        <div class="col-4 m-auto d-flex justify-content-center">
            <font-awesome-icon v-for="(card, i) in cardsData" :key="i" icon="fa-solid fa-circle" class="me-2" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.cards-row {
    overflow-x: hidden;
}

svg {
    opacity: 0.5;
    scale: 0.5;

    &.selected {
        opacity: 1;
        scale: 0.8;
    }
}
</style>