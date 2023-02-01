<script>
export default {
    name: 'EventsCard',
    props: {
        eventData: String,
        cardIndex: Number
    },
    computed: {
        getImageUrl() {
            return new URL(`../../assets/img/${this.eventData.imgUrl}`, import.meta.url).href;
        },
        formattetDate() {
            const options = { month: 'short', day: 'numeric', year: 'numeric' };
            return this.eventData.date.toLocaleDateString('en-US', options);
        },
        //Function changing flex direction every 2 cards based on card index
        cardDirection() {
            return (this.cardIndex % 4) < 2 ? 'flex-row' : 'flex-row-reverse'
        }
    }
}
</script>

<template>
    <div class="col d-flex mb-5" :class="cardDirection">
        <img class="img-fluid" :src="getImageUrl" :alt="eventData.title">
        <div class="event-info p-4 d-flex flex-column justify-content-center">
            <time class="mb-3">{{ formattetDate }}</time>
            <h5 class="mb-3">{{ eventData.title }}</h5>
            <address><font-awesome-icon icon="fa-solid fa-location-dot" /> {{ eventData.location }}</address>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
</style>