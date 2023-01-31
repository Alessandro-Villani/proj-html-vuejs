import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import {faClock} from '@fortawesome/free-regular-svg-icons';

library.add(faClock);

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
