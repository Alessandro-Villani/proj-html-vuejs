<script>
import AppHeader from './components/AppHeader.vue';
import CountDown from './components/generics/CountDown.vue';

export default {
    name: 'MaxCoach',
    components: { CountDown, AppHeader }
}
</script>

<template>
    <CountDown title="Starts TOMORROW! Our biggest event of the year..." date="2-4-2023" :has-button="true"
        label="Get ticket" />
    <AppHeader />

</template>

<style lang="scss">
@use './assets/styles/style.scss'
</style>
