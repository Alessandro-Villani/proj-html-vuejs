<script>
export default {
    name: 'SectionTitle',
    props: {
        title: String,
        side: String
    }
}
</script>

<template>
    <div :class="side">
        <h1>{{ title }}</h1>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

h1 {
    font-size: 150px;
    color: white;
    text-shadow: 0 0 5px $darkgray;
}

div {
    position: absolute;
    z-index: -1;
}

.left {
    rotate: 270deg;
    bottom: 200px;
    left: 50px;
    transform: translateY(-100%);
}

.right {
    rotate: 90deg;
    right: 50px;
    top: 50%;
    transform: translate(-25%, -100%);
}
</style>