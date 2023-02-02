<script>
import MainButton from '../generics/MainButton.vue';

export default {
    name: "CoachingFeedbackCard",
    props: {
        feedback: Object,
        hasButton: Boolean,
        buttonLabel: String
    },
    components: { MainButton },
    emits: ['coaching-button-click']
}
</script>

<template>
    <div class="col-5">
        <div class="feedback-card p-5 text-center">
            <img class="img-fluid" src="../../assets/img/artist-quote-icon.png" alt="quote-icon">
            <blockquote>{{ feedback.quote }}</blockquote>
            <address class="mb-0">{{ feedback.coachName }}</address>
        </div>
    </div>
    <div class="col-7 d-flex">
        <div class="feedback-card p-5 d-flex flex-column justify-content-between align-items-start">
            <div class="paragraphs">
                <p>{{ feedback.p1 }}</p>
                <p>{{ feedback.p2 }}</p>
            </div>
            <MainButton v-if="hasButton" :label="buttonLabel" type="secondary"
                @button-click="$emit('coaching-button-click')" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

.col-5 {
    position: relative;

    img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    blockquote {
        font-size: 40px;
        font-weight: bold;
    }

    address {
        font-family: "Allison", cursive;
        color: $lightblue;
        font-size: 50px;
    }
}

p {
    font-size: 18px;
}
</style>