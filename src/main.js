import './assets/main.css'

import { createApp } from 'vue'
import FileUpload from './App.vue'
import App from './App.vue'
import router from './router'


import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiBagFill, FaClock } from 'oh-vue-icons/icons';

import './assets/main.css';

// side bar 
import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'
//import './style.scss'


addIcons(BiBagFill, FaClock);


const app = createApp(App);


app.component('v-icon', OhVueIcon);

app.use(router)
app.use(vueAwesomeSidebar)

app.mount('#app')

