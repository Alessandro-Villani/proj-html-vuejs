<script>
export default {
    name: 'TestimonialCard',
    props: {
        testimonialData: Object,
        order: Number
    },
    computed: {
        //Computed returning dynamic image url
        getImageUrl() {
            return new URL(`../../assets/img/${this.testimonialData.imgUrl}`, import.meta.url).href;
        },

        //Computed defining transform based on order
        transform() {
            if (this.order === 1) {
                return 'scale(1)';
            } else if (this.order === 0) {
                return 'scale(0.9) translateX(-2%)';
            } else if (this.order === 2) {
                return 'scale(0.9) translateX(2%)';
            }
            return null;
        },
    }
}
</script>

<template>
    <div class="col d-flex" :style="{ 'order': order, 'transition': 'all 1s ease-in-out', 'transform': transform }">
        <div class="testimonial-card p-3 d-flex flex-column justify-content-between" :class="{ 'active': order === 1 }">
            <div class="testimonial-feedback mb-5">
                <h5 class="mb-3">{{ testimonialData.title }}</h5>
                <p>{{ testimonialData.review }}</p>
            </div>
            <address class="testimonial mb-0 d-flex">
                <img class="me-2" :src="getImageUrl" :alt="testimonialData.name">
                <div class="testimonial-info d-flex flex-column justify-content-center">
                    <h6 class="testimonial-name mb-1">{{ testimonialData.name }}</h6>
                    <p class="testimonial-role mb-1">/ {{ testimonialData.role }}</p>
                </div>
            </address>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

.testimonial-card {
    background-color: white;
    border-radius: 10px;
    opacity: 0.5;
    transform: scale(0.9);
    cursor: pointer;
    transition: all 1s ease-in-out;

    &.active {
        opacity: 1;
        transform: scale(1);
    }

    &:not(.active):hover {
        opacity: 0.8;
        scale: 1.1;
    }

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .testimonial-info>* {
        font-size: 14px;

        &.testimonial-role {
            color: gray;
        }
    }
}
</style>