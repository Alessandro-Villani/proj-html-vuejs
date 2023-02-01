<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppSection from './components/AppSection.vue';
import CoachingCard from './components/coaching_section/CoachingCard.vue';
import CoachingFeedbackCard from './components/coaching_section/CoachingFeedbackCard.vue';
import CountDown from './components/generics/CountDown.vue';
import { coachingCards, coachingFeedback } from './data'

export default {
    name: 'MaxCoach',
    data() {
        return {
            coachingCards,
            coachingFeedback
        }
    },
    components: { CountDown, AppHeader, AppJumbotron, AppSection, CoachingCard, CoachingFeedbackCard }
}
</script>

<template>
    <CountDown title="Starts TOMORROW! Our biggest event of the year..." date="2-4-2023" :has-button="true"
        label="Get ticket" />
    <AppHeader />
    <main>
        <AppJumbotron title="Hello, I'm Matin" content="artist coaching and mentoring might be for you"
            :hasButton="true" buttonLabel="Get started today" />
        <app-section type="coaching" title="Artist coaching"
            subtitle="I understand what it takes to create. I can help you with">
            <div class="row row-cols-4 mb-5">
                <CoachingCard v-for="card in coachingCards" :coachingCardData="card" />
            </div>
            <div class="row mb-5">
                <CoachingFeedbackCard :feedback="coachingFeedback" :hasButton="true" buttonLabel="Get started today" />
            </div>
            <div class="row">
                <div class="col-6 m-auto text-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ElFJ1qcl74U"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
        </app-section>
    </main>

</template>

<style lang="scss">
@use './assets/styles/style.scss'
</style>
