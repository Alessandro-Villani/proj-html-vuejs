<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppNewsletter from './components/AppNewsletter.vue';
import AppSection from './components/AppSection.vue';
import ArticleCard from './components/articles_section/ArticleCard.vue';
import CoachingCard from './components/coaching_section/CoachingCard.vue';
import CoachingFeedbackCard from './components/coaching_section/CoachingFeedbackCard.vue';
import CoursesCard from './components/courses_section/CoursesCard.vue';
import EventsCard from './components/events_section/EventsCard.vue';
import CountDown from './components/generics/CountDown.vue';
import MainButton from './components/generics/MainButton.vue';
import CardSlider from './components/testimonials_section/CardSlider.vue';
import { coachingCards, coachingFeedback, testimonialCards, coursesCards, articleCards, eventCards } from './data'

export default {
    name: 'MaxCoach',
    data() {
        return {
            coachingCards,
            coachingFeedback,
            testimonialCards,
            coursesCards,
            articleCards,
            eventCards
        }
    },
    components: { CountDown, AppHeader, AppJumbotron, AppSection, CoachingCard, CoachingFeedbackCard, CardSlider, CoursesCard, MainButton, ArticleCard, EventsCard, AppNewsletter, AppFooter }
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
                <CoachingCard v-for="card in coachingCards" :key="card.title" :coachingCardData="card" />
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
        <app-section type="testimonials" title="Testimonials" subtitle="Why do people love me?" color="secondary">
            <CardSlider :cardsData="testimonialCards" />
        </app-section>
        <app-section type="artists" title="Artist coaching" subtitle="Latest Online Courses">
            <div class="row row-cols-4 mb-5">
                <CoursesCard v-for="course in coursesCards" :courseData="course" />
            </div>
            <div class="text-center">
                <MainButton label="View all courses &rarr;" type="secondary" />
            </div>
        </app-section>
        <app-section type="articles" title="Articles and Tips" subtitle="Latest From The Blog" color="tertiary">
            <div class="row row-cols-3 mb-5">
                <ArticleCard v-for="card in articleCards" :cardData="card" />
            </div>
            <div class="details text-center">
                <h5>Get into details now? <a href="#">View all posts &rarr;</a></h5>
            </div>
        </app-section>
        <app-section type="events" title="Upcoming Events" subtitle="Let's Work Together">
            <div class="row row-cols-2">
                <EventsCard v-for="(event, i) in eventCards" :eventData="event" :cardIndex="i" />
            </div>
        </app-section>
        <AppNewsletter />
    </main>
    <AppFooter />
</template>

<style lang="scss">
@use './assets/styles/style.scss'
</style>
