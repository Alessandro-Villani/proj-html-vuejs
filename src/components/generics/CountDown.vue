<script>
import MainButton from './MainButton.vue';

// Constants for conversions
const msToSeconds = 1000;
const msToMinutes = msToSeconds * 60;
const msToHours = msToMinutes * 60;
const msToDays = msToHours * 24;

export default {
    name: "CountDown",
    data() {
        return {
            daysLeft: null,
            hoursLeft: null,
            minutesLeft: null,
            secondsLeft: null,
        };
    },
    props: {
        title: String,
        date: String,
        hasButton: Boolean,
        label: String
    },
    computed: {
        //Computed returning actual date in ms
        finalDateInMs() {
            return new Date(this.date).getTime();
        }
    },
    emits: ['timer-button-click'],
    methods: {
        //Function for timer
        timer() {
            const newTimer = setInterval(() => {
                //Pick actual date
                const actualDateInMs = new Date().getTime();
                //Set clear interval
                if (actualDateInMs > this.finalDateInMs) {
                    clearInterval(newTimer);
                    return;
                }
                //Calculate difference between now and end date in MS
                const dateDifference = this.finalDateInMs - actualDateInMs;
                //Convert date in time units
                let daysLeft = Math.floor(dateDifference / msToDays);
                daysLeft = daysLeft < 10 ? "0" + daysLeft : daysLeft;
                let hoursLeft = Math.floor((dateDifference % msToDays) / msToHours);
                hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
                let minutesLeft = Math.floor((dateDifference % msToHours) / msToMinutes);
                minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
                let secondsLeft = Math.floor((dateDifference % msToMinutes) / msToSeconds);
                secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
                //Update Data
                this.daysLeft = daysLeft;
                this.hoursLeft = hoursLeft;
                this.minutesLeft = minutesLeft;
                this.secondsLeft = secondsLeft;
            }, 1000);
        }
    },
    mounted() {
        this.timer();
    },
    components: { MainButton }
}
</script>

<template>
    <div v-if="secondsLeft" class="countdown py-2">
        <div class="container d-flex justify-content-center align-items-center">
            <h5 v-if="title" class="mb-0 me-3">{{ title }}</h5>
            <div class="timer d-flex align-items-center me-3">
                <font-awesome-icon icon="fa-regular fa-clock" class="me-2" />
                <div class="time-left">{{ daysLeft }}:{{ hoursLeft }}:{{ minutesLeft }}:{{ secondsLeft }}</div>
            </div>
            <MainButton v-if="hasButton" :label="label" size="small" @button-click="$emit('timer-button-click')" />
        </div>

    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

.countdown {
    background-color: $lightgray;

    h5 {
        color: gray;
    }

    .timer {
        font-size: 20px;
    }
}
</style>