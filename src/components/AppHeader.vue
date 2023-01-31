<script>
import { headerMenus } from '../data'

export default {
    name: 'AppHeader',
    data() {
        return {
            headerMenus
        }
    }
}
</script>

<template>
    <header class="py-3">
        <div class="container">
            <div class="row justify-content-between align-items-start">
                <a href="#" class="logo col-2"><img class="img-fluid" src="../assets/img/dark-logo.png" alt="logo"></a>
                <nav class="menu col flex-grow-1 align-items-center">
                    <ul class="d-flex justify-content-between mb-0">
                        <li v-for="link in headerMenus.menuButtons" :key="link.id"><button class="menu-btn"
                                @click="link.submenu.show = !link.submenu.show"><span class="me-2">{{
                                    link.title
                                }}</span><font-awesome-icon icon="fa-solid fa-chevron-down"
                                    :class="{ 'rotate': link.submenu.show }" /></button>
                            <ul class="submenu" v-if="link.submenu.show">
                                <li v-for="link in link.submenu.links"><a href="#" class="menu-btn">{{ link }}</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <nav class="social col-2">
                    <ul class="d-flex justify-content-between mb-0">
                        <li v-for="link in headerMenus.socialButtons"><a href="#" class="menu-btn"><font-awesome-icon
                                    :icon="['fa-brands', link]" /></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

a {
    text-decoration: none;
    color: currentColor;
}

ul {
    list-style: none;

    .menu-btn {
        background-color: transparent;
        padding: 6px;
        border: none;
    }

    li button,
    li a {
        text-transform: capitalize;

    }
}

.menu ul {
    padding: 0 8rem;

    svg {
        font-size: 10px;

        &.rotate {
            transform: rotate(180deg);
        }
    }

    .submenu {
        padding: 0;
    }
}

.social a {
    color: $darkgray;

    svg {
        transition: all 0.5s;
    }

    &:hover svg {
        transform: scale(1.2);
    }
}
</style>