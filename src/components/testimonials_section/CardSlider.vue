<script>
import TestimonialCard from './TestimonialCard.vue';

export default {
    name: "CardSlider",
    data() {
        return {
            currentIndex: 0,
            sliderInterval: null,
            sliderTimeout: null,
        }
    },
    props: {
        cardsData: Array
    },
    components: { TestimonialCard },
    methods: {
        //Function defining order based on currentIndex
        defineOrder(i) {
            if (i === this.currentIndex) {
                return 1
            } else if (i === (this.currentIndex - 1) || (this.currentIndex === 0 && i === (this.cardsData.length - 1))) {
                return 0
            } else if (i === (this.currentIndex + 1)) {
                return 2
            } else {
                return 3
            }
        },

        //Function activating slider interval
        slider() {
            this.sliderInterval = setInterval(() => {
                if (this.currentIndex === (this.cardsData.length - 1)) {
                    this.currentIndex = 0;
                } else {
                    this.currentIndex++
                }
            }, 3000)
        },

        //Function setting currentIndex based on the selected card or dot, and stopping slider for 30s
        selectCard(i) {
            clearInterval(this.sliderInterval);
            clearTimeout(this.sliderTimeout);
            this.currentIndex = i;
            this.sliderTimeout = setTimeout(() => this.slider(), 30000);
        }
    },
    mounted() {
        this.slider()
    }
}
</script>

<template>
    <div class="cards-row row row-cols-3 mb-5 flex-nowrap">
        <TestimonialCard v-for="(card, i) in cardsData" :key="i" :testimonialData="card" :order="defineOrder(i)"
            @click="selectCard(i)" />
    </div>
    <div class="row">
        <div class="col-4 m-auto d-flex justify-content-center">
            <font-awesome-icon v-for="(card, i) in cardsData" :key="i" icon="fa-solid fa-circle" class="me-2"
                :class="{ 'selected': i === this.currentIndex }" @click="selectCard(i)" />
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
    cursor: pointer;

    &.selected {
        opacity: 1;
        scale: 0.8;
    }
}
</style>