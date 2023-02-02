<script>
export default {
    name: 'EventsCard',
    props: {
        eventData: Object,
        cardIndex: Number
    },
    computed: {
        //Computed returning dynamic img url
        getImageUrl() {
            return new URL(`../../assets/img/${this.eventData.imgUrl}`, import.meta.url).href;
        },

        //Computed returning formatted date in the desired format
        formattetDate() {
            const options = { month: 'short', day: 'numeric', year: 'numeric' };
            return this.eventData.date.toLocaleDateString('en-US', options);
        },

        //Computed returning flex direction based on card index, changing it every 2 cards
        cardDirection() {
            return (this.cardIndex % 4) < 2 ? 'flex-row' : 'flex-row-reverse'
        }
    }
}
</script>

<template>
    <a :href="eventData.href" class="events-col col d-flex mb-5">
        <div class="events-card d-flex mb-5" :class="cardDirection">
            <img class="img-fluid" :src="getImageUrl" :alt="eventData.title">
            <div class="event-info p-4 d-flex flex-column justify-content-center">
                <time class="mb-3">{{ formattetDate }}</time>
                <h5 class="mb-3">{{ eventData.title }}</h5>
                <address><font-awesome-icon icon="fa-solid fa-location-dot" /> {{ eventData.location }}</address>
            </div>
        </div>
    </a>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

.events-col {
    display: block;
    text-decoration: none;
    color: black;
    transition: all 0.5s;


    &:hover {
        scale: 1.1;
    }

    .events-card {
        border: 1px solid transparent;
        transition: all 0.5s;
    }

    &:hover .events-card {
        border-color: $maincolor;
    }

    time,
    address {
        color: gray;
    }

    time {
        text-transform: uppercase;
    }

    address {
        font-size: 14px;
    }

    h5 {
        text-transform: capitalize;
    }
}
</style>