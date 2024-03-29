import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import '@/css/main.css';

const app = createApp(App);

app.use(createPinia()).use(router);

app.mount('#app');
