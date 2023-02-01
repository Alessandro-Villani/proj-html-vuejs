<script>

export default {
    name: 'AppSection',
    props: {
        type: String,
        title: String,
        subtitle: String
    },
}
</script>

<template>
    <section class="py-5" :class="type">
        <div class="container">
            <div class="row text-center mb-5">
                <div class="col-5 m-auto text-center ">
                    <h2 class="section-title">{{ title }}</h2>
                    <h4 class="subtitle">{{ subtitle }}</h4>
                </div>
            </div>
            <slot></slot>
        </div>
    </section>

</template>

<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

h2.section-title {
    font-family: "Allison", cursive;
    font-size: 40px;
    color: $lightblue;
}

.subtitle {
    font-weight: bold;
    font-size: 28px;
}
</style>