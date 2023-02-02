<script>
import { headerMenus } from '../data'

export default {
    name: 'AppHeader',
    data() {
        return {
            headerMenus
        }
    },
    methods: {
        closeOtherMenus(index) {
            this.headerMenus.menuButtons.forEach((menuButton, i) => {
                if (i !== index) {
                    menuButton.submenu.show = false
                }
            })
        },
        toggleMenu(link, index) {
            this.closeOtherMenus(index);
            link.submenu.show = !link.submenu.show
        }
    }
}
</script>

<template>
    <header id="main-header" class="py-3">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <a href="#" class="logo col-2"><img class="img-fluid" src="../assets/img/dark-logo.png" alt="logo"></a>
                <nav class="menu col flex-grow-1 align-items-center">
                    <ul class="d-flex justify-content-between mb-0">
                        <li v-for="(link, i) in headerMenus.menuButtons" :key="link.id"><button class="menu-btn"
                                @click="toggleMenu(link, i)"><span class="me-2">{{
                                    link.title
                                }}</span><font-awesome-icon icon="fa-solid fa-chevron-down"
                                    :class="{ 'rotate': link.submenu.show }" /></button>
                            <ul class="submenu py-1" v-if="link.submenu.show">
                                <li v-for="link in link.submenu.links" class="mb-1"><a href="#" class="menu-btn">{{
                                    link
                                }}</a>
                                </li>
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
        border-bottom: 1px solid transparent;
        transition: all 0.5s;

        &:hover {
            color: $blue;
            border-color: currentColor;
        }
    }

    li {
        position: relative;

        button,
        a {
            text-transform: capitalize;

        }

        .submenu {
            padding: 0;
            position: absolute;
            left: 0;
            right: 0;
            z-index: 1;
            border: 1px solid $lightgray;
            background-color: white;

            .menu-btn {
                border: none;

                &:hover {
                    border: none;
                }
            }
        }


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


}

.social a {
    color: $darkgray;
    border: none;

    &:hover {
        color: $darkgray;
        border: none;
    }

    svg {
        transition: all 0.5s;
    }

    &:hover svg {
        transform: scale(1.2);
    }
}
</style>