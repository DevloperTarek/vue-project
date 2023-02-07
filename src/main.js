import { createApp } from 'vue';
import mitt from 'mitt';

import './style.css';
import App from './App.vue';
const eventBus = mitt();
import router from './router';
vue.filter("Jame", function(list){
    return  list.toUpperCase();
});

const app = createApp(App);
app.use(router);
app.config.globalProperties.$eventBus = eventBus;
app.mount('#app');
