import { createApp } from 'vue'
import App from './App.vue'

//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

//FONTSOURCE
import '@fontsource/allison';
import "@fontsource/londrina-outline";

//FONTAWESOME
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

//ICONS
import {faClock} from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faRuler } from '@fortawesome/free-solid-svg-icons';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



library.add(faClock, faChevronDown, faTwitter, faFacebook, faInstagram, faLinkedin, faCircle, faFileLines, faUser, faCalendar, faEye, faLocationDot, faRuler, faLifeRing, faBook, faCartShopping);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
