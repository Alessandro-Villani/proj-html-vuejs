<script>
export default {
    name: 'GetToTop',
    props: {
        link: String
    }
}
</script>

<template>
    <a :href="link" class="arrow">
        &uarr;
    </a>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

a {
    display: inline-block;
    height: 50px;
    width: 50px;
    color: white;
    text-decoration: none;
    background-color: $orange;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    text-align: center;
    line-height: 50px;
    transition: all 0.5s;

    &:hover {
        scale: 1.2;
        background-color: $lightblue;
        color: white;
    }
}
</style>