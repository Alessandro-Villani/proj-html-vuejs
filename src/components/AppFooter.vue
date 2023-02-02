<script>
import { headerMenus } from '../data';
import { footerMenus } from '../data';
export default {
    name: 'AppFooter',
    data() {
        return {
            footerMenus,
            socialButtons: headerMenus.socialButtons
        }
    },
    methods: {
        //Function returning image url based on index
        getImageUrl(i) {
            return new URL(`../assets/img/${footerMenus.igImagesUrls[i]}`, import.meta.url).href;
        },
    }
}
</script>

<template>
    <footer>
        <div class="container py-5">
            <div class="footer-top row row-cols-3 py-5">
                <div class="contacts">
                    <h5>Address</h5>
                    <address class="mb-1">382 NE 191st St # 87394 Miami, FL 33179-3899 <br>
                        +1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</address>
                    <a href="#" class="e-mail">support@maxcoach.com</a>
                    <ul class="social d-flex p-0 mt-3">
                        <li v-for="(button, i) in socialButtons" :key="i" class="me-2"><a href="#"><font-awesome-icon
                                    :icon="['fa-brands', button]" /></a></li>
                    </ul>
                </div>
                <nav class="footer-menus col row row-cols-2 px-5">
                    <div v-for="(menu, i) in footerMenus.menus" :key="i" class="footer-menu col ">
                        <h5 class="mb-3">{{ menu.title }}</h5>
                        <ul class="p-0">
                            <li v-for="(link, i) in menu.links" :key="i" class="mb-2"><a href="#">{{ link }}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="social-pics col">
                    <h5 class="d-inline-block me-2 mb-3">Instagram</h5><span><a href="#">@maxcoach</a></span>
                    <div class="row row-cols-3">
                        <a v-for="(image, i) in footerMenus.igImagesUrls" :key="i" href="#" class="col ig-a"><img
                                class="img-fluid" :src="getImageUrl(i)" :alt="`ig-${i}`"></a>
                    </div>

                </div>
            </div>
            <div class="footer-bottom text-center p-5">
                <h6>&copy; 2020 Maxcoach. All rights reserved</h6>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../assets/styles/partials/variables' as *;

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: currentColor;
    transition: all 0.5s;

    &:hover {
        color: $blue;
    }
}

.footer-menu h5 {
    text-transform: capitalize;
}

.social-pics a {
    color: $maincolor;
    font-weight: bold;
    transition: all 0.5s;

    &:hover {
        color: $lightblue;
    }
}

.social-pics .ig-a:hover {
    scale: 1.1;
}

.footer-bottom h6 {
    color: gray;
    font-size: 14px;
}

.social a {
    color: gray;
    font-size: 20px;

    svg {
        transition: all 0.5s;
    }

    &:hover svg {
        transform: scale(1.2);
    }
}
</style>