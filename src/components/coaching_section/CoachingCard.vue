<script>
export default {
    name: 'CoachingCard',
    props: {
        coachingCardData: Object
    },
    computed: {
        getImageUrl() {
            return new URL(`../../assets/img/${this.coachingCardData.imgUrl}`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <div class="coaching-col col">
        <div class="coaching-card px-3">
            <img class="mb-3" :src="getImageUrl" :alt="coachingCardData.title">
            <h5>{{ coachingCardData.title }}</h5>
            <p>{{ coachingCardData.text }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
h5 {
    text-transform: capitalize;
}
</style>