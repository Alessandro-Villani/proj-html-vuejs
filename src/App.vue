<script>
import CountDown from './components/generics/CountDown.vue';

export default {
    name: 'MaxCoach',
    components: { CountDown }
}
</script>

<template>
    <CountDown title="Starts TOMORROW! Our biggest event of the year..." date="2-4-2023" />

</template>

<style lang="scss">
@use './assets/styles/style.scss'
</style>
