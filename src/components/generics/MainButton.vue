<script>
export default {
    name: 'MainButton',
    props: {
        label: String,
        size: String,
        type: String
    },
    emits: ['button-click'],
}
</script>

<template>
    <button class="btn btn-main" :class="[size, type]" @click="$emit('button-click')">{{ label }}</button>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

.btn.btn-main {
    background-color: $maincolor;
    transition: all 0.5s;
    color: white;
    font-weight: bolder;
    padding: 12px 24px;

    &.small {
        padding: 6px 24px;
    }

    &.secondary {
        background-color: rgba($maincolor, $alpha: 0.3);
        color: $maincolor;
    }

    &:hover {
        background-color: $lightblue;
        color: white;
    }

    &.secondary:hover {
        background-color: $maincolor;
        color: white;
    }
}
</style>