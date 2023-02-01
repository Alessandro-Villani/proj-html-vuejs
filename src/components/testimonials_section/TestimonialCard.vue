<script>
export default {
    name: 'TestimonialCard',
    props: {
        testimonialData: Object,
    },
    computed: {
        getImageUrl() {
            return new URL(`../../assets/img/${this.testimonialData.imgUrl}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="col d-flex">
        <div class="testimonial-card p-3 d-flex flex-column justify-content-between">
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

    &.active {
        opacity: 1;
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