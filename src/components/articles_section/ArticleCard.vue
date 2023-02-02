<script>
export default {
    name: 'ArtocleCard',
    props: {
        cardData: Object
    },
    computed: {
        getImageUrl() {
            return new URL(`../../assets/img/${this.cardData.imgUrl}`, import.meta.url).href;
        },
        backgroundImg() {
            return this.cardData.position === 'main' ? this.getImageUrl : ''

        },
        formattetDate() {
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            return this.cardData.date.toLocaleDateString('en-US', options);
        }
    }
}
</script>

<template>
    <div class="col" :class="cardData.position">
        <div class="article-card" :class="cardData.position" :style="{ 'background-image': `url(${backgroundImg})` }">
            <div :class="{ 'overlay': cardData.position === 'main' }">
                <img v-if="cardData.position !== 'main'" class="img-fluid" :src="getImageUrl" :alt="cardData.title">
                <div class="article-data">
                    <h6>ARTIST</h6>
                    <h5>{{ cardData.title }}</h5>
                    <div class="article-info">
                        <time class="me-2"><font-awesome-icon icon="fa-regular fa-calendar" class="me-1" />{{
                            formattetDate
                        }} </time>
                        <span><font-awesome-icon icon="fa-regular fa-eye" class="me-1" /> {{ cardData.views }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

h5 {
    text-transform: capitalize;
}

.article-card.main {
    height: 600px;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;

    position: relative;

    h5 {
        font-size: 25px;
    }

    .article-info {
        font-weight: bold;
        font-size: 14px;
    }

    .overlay {
        background-color: rgba($color: #000000, $alpha: 0.3);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
}

.col:not(.main) {
    padding: 50px 80px;
    display: flex;

    &.left {
        align-items: flex-end;
    }

    &.right {
        align-items: flex-start;
    }

    .article-card {
        box-shadow: 0 0 10px rgba($color: $darkgray, $alpha: 0.3);

        .article-data {
            padding: 12px;
            background-color: white;

            h5 {
                font-size: 16px;
            }

            h6 {
                font-size: 14px;
                color: gray;
            }

            .article-info {
                color: gray;
                font-size: 12px;
            }
        }
    }
}
</style>