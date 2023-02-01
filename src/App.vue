<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppSection from './components/AppSection.vue';
import CountDown from './components/generics/CountDown.vue';

export default {
    name: 'MaxCoach',
    components: { CountDown, AppHeader, AppJumbotron, AppSection }
}
</script>

<template>
    <CountDown title="Starts TOMORROW! Our biggest event of the year..." date="2-4-2023" :has-button="true"
        label="Get ticket" />
    <AppHeader />
    <main>
        <AppJumbotron title="Hello, I'm Matin" content="artist coaching and mentoring might be for you"
            :hasButton="true" buttonLabel="Get started today" />
        <AppSection type="coaching" title="Artist coaching"
            subtitle="I understand what it takes to create. I can help you with" />
    </main>

</template>

<style lang="scss">
@use './assets/styles/style.scss'
</style>
