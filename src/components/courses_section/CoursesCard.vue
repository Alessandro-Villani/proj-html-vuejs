<script>
export default {
    name: 'CoursesCard',
    props: {
        courseData: Object
    },
    computed: {
        getImageUrl() {
            return new URL(`../../assets/img/${this.courseData.imgUrl}`, import.meta.url).href;
        },
        formattedPrice() {
            return this.courseData.price.toFixed(2);
        }
    }
}
</script>

<template>
    <div class="col mb-3 d-flex">
        <div class="courses-card d-flex flex-column">
            <img class="img-fluid" :src="getImageUrl" :alt="courseData.title">
            <div class="course-info d-flex flex-column justify-content-between flex-grow-1 p-3">
                <p class="h6 price">${{ formattedPrice }}</p>
                <h5 class="title">{{ courseData.title }}</h5>
                <div class="class-info">
                    <span class="me-3"><font-awesome-icon icon="fa-regular fa-file-lines" class="me-1" /> {{
                        courseData.lessons
                    }} Lessons</span>
                    <span><font-awesome-icon icon="fa-regular fa-user" class="me-1" /> {{
                        courseData.students
                    }} Students</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

.courses-card {
    cursor: pointer;

    .course-info {

        border: 1px solid transparent;
        transition: all 0.5s;
    }

    &:hover .course-info {
        transform: translateY(-50px);
        border: 1px solid $maincolor;
        background-color: white;
    }
}

.price {
    color: $maincolor;
    font-weight: bolder;
}

.title {
    text-transform: capitalize;
}

span {
    font-size: 12px;
    color: gray;
}
</style>