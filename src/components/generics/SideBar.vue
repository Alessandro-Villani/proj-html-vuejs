<script>
export default {
    name: 'SideBar',
    props: {
        sideBarIcons: Array
    },
    emits: ['sidebar-button-click']
}
</script>

<template>
    <div class="sidebar-container d-flex justify-content-end">
        <ul class="sidebar p-0">
            <li v-for="(icon, i) in sideBarIcons" :key="i"><button
                    @click="$emit('sidebar-button-click', icon.event)"><font-awesome-icon
                        :icon="['fa-solid', icon.icon]" /></button></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/styles/partials/variables' as *;

.sidebar-container {
    width: 70px;
    position: fixed;
    right: -30px;
    top: 50vh;
    transform: translateY(-50%);
    text-align: end;
    transition: right 0.5s;

    &:hover {
        right: 0;
    }


    .sidebar {
        background-color: white;
        list-style: none;
        border: 1px solid $darkgray;
        border-right: none;
        border-radius: 3px 0 0 3px;
        width: 50%;

        button {
            width: 35px;
            height: 35px;
            border: none;
            background-color: white;
            color: $darkgray;

            >* {
                transition: all 0.5s;
            }

            &:hover>* {
                scale: 1.2;
                color: $maincolor;
            }
        }
    }
}
</style>

